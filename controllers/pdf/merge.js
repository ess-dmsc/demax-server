const merge = require('easy-pdf-merge');
const fs = require('file-system');

const Proposal = require('../../models/proposal.js');

async function mergeByProposalId(request, response) {
	try {
		const proposal = await Proposal.findOne({proposalId: request.params.proposalId});

		let attachments = [];

		if(proposal.generatedProposal.generated) {
			attachments.push(proposal.generatedProposal.path);
		}
		if(proposal.proposalTemplate.uploaded) {
			attachments.push(proposal.proposalTemplate.path);
		}
		if(proposal.needByDateAttachment.uploaded) {
			attachments.push(proposal.needByDateAttachment.path);
		}

		if(proposal.pbdIdReferenceAttachment.uploaded) {
			attachments.push(proposal.pbdIdReferenceAttachment.path);
		}
		if(proposal.organismReferenceAttachment.uploaded) {
			attachments.push(proposal.organismReferenceAttachment.path);
		}
		if(proposal.needsPurificationSupportAttachment.uploaded) {
			attachments.push(proposal.needsPurificationSupportAttachment.path);
		}
		if(proposal.chemicalStructureAttachment.uploaded) {
			attachments.push(proposal.chemicalStructureAttachment.path);
		}
		if(proposal.moleculePreparationReferenceArticle.uploaded) {
			attachments.push(proposal.moleculePreparationReferenceArticle.path);
		}

		let outputPath = __basedir + "/files/merged/" + proposal.proposalId + '.pdf';

		merge(attachments, outputPath,
			function(error) {
				if(error) {
					console.log(error);
					return response.status(400).json({
						error: error.message
					});
				}

				const file = fs.createReadStream(outputPath);
				const stat = fs.statSync(outputPath);
				response.setHeader('Content-Length', stat.size);
				response.setHeader('Content-Type', 'application/pdf');
				response.setHeader('Content-Disposition', 'attachment; filename=' + proposal.proposalId + '.pdf');
				file.pipe(response);

			});
		await proposal.update({
			mergedProposal: {
				path: `"./files/merged/${proposal.proposalId}.pdf"`,
				merged: true
			}
		});
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

module.exports = mergeByProposalId;