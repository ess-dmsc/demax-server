const merge = require('easy-pdf-merge');
const fs = require('file-system');

const Proposal = require('../models/proposal.js');

exports.mergeByProposalId = async function(request, response, next) {
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

		let outputPath = './files/merged/' + proposal.proposalId + '.pdf';
		merge(attachments, outputPath,
			function(error) {
				if(error) {
					throw error;
				}
			Proposal.findOneAndUpdate({proposalId: request.params.proposalId},{
					mergedProposal: {
						name: request.params.proposalId + '.pdf',
						path: `"./files/merged/${request.params.proposalId}.pdf"`,
						merged: true
					}
				});
				next();
			});
	} catch(error) {
		console.log(error);
		return response.status(406).json('Failed to merge PDFS')
	}
};

exports.sendmergedPdf = async function(request, response){
	try{
		const file = fs.createReadStream('./files/merged/' + request.params.proposalId + '.pdf');
		const stat = fs.statSync('./files/merged/' + request.params.proposalId + '.pdf');
		response.setHeader('Content-Disposition', 'attachment; filename=' + request.params.proposalId + '.pdf');
		response.setHeader('Content-type', 'application/pdf');
		response.setHeader('Access-Control-Allow-Origin', '*');
		response.setHeader('Content-Length', stat.size);
		response.status(200);
		file.pipe(response);
		await Proposal.findOneAndUpdate({proposalId: request.params.proposalId},{
			mergedProposal: {
				name: request.params.proposalId + '.pdf',
				path: `"./files/merged/${request.params.proposalId}.pdf"`,
				merged: true
			}
		});
	}
	catch(error){
		console.log(error);
	}
}
