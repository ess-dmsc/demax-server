const Proposal = require('../../models/proposal.js');

exports.getUploadedAttachmentsByProposalId = async function (request, response) {
	let proposal = await Proposal.findOne({proposalId: request.params.proposalId});

	try {

		console.log(proposal.proposalId);
		let attachments = [];

		if(proposal.proposalTemplate.uploaded) {
			attachments.push(proposal.proposalTemplate.name);
		}
		if(proposal.needByDateAttachment.uploaded) {
			attachments.push(proposal.needByDateAttachment.name);
		}

		if(proposal.pbdIdReferenceAttachment.uploaded) {
			attachments.push(proposal.pbdIdReferenceAttachment.name);
		}
		if(proposal.organismReferenceAttachment.uploaded) {
			attachments.push(proposal.organismReferenceAttachment.name);
		}
		if(proposal.needsPurificationSupportAttachment.uploaded) {
			attachments.push(proposal.needsPurificationSupportAttachment.name);
		}
		if(proposal.chemicalStructureAttachment.uploaded) {
			attachments.push(proposal.chemicalStructureAttachment.name);
		}
		if(proposal.moleculePreparationReferenceArticle.uploaded) {
			attachments.push(proposal.moleculePreparationReferenceArticle.name);
		}

		response.send(attachments);
		console.log(attachments);
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};
