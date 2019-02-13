const Proposal = require('../../models/proposal.js');

exports.getUploadedAttachmentsByProposalId = async function (request, response) {
	let proposal = await Proposal.findOne({proposalId: request.params.proposalId});

	try {

		let attachments = [];

		if(proposal.proposalTemplate.uploaded) {
			attachments.push(proposal.proposalTemplate);
		}
		if(proposal.needByDateAttachment.uploaded) {
			attachments.push(proposal.needByDateAttachment);
		}

		if(proposal.pbdIdReferenceAttachment.uploaded) {
			attachments.push(proposal.pbdIdReferenceAttachment);
		}
		if(proposal.organismReferenceAttachment.uploaded) {
			attachments.push(proposal.organismReferenceAttachment);
		}
		if(proposal.needsPurificationSupportAttachment.uploaded) {
			attachments.push(proposal.needsPurificationSupportAttachment);
		}
		if(proposal.chemicalStructureAttachment.uploaded) {
			attachments.push(proposal.chemicalStructureAttachment);
		}
		if(proposal.moleculePreparationReferenceArticle.uploaded) {
			attachments.push(proposal.moleculePreparationReferenceArticle);
		}

		response.status(200).send(attachments);

	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};


exports.getByFileName = async function(request, response) {
	try {
		let filename = request.params.filename;
		console.log(filename);
		response.download(__basedir + '/files/uploads/' + filename);
	}
	catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};