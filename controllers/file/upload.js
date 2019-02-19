const Proposal = require('../../models/proposal.js');
const Attachment = require('../../models/attachment.js');

exports.uploadAttachment = async function (request, response) {

	let attachment = request.params.attachment;
	let id = request.body.proposalId;
	console.log(id)
	let path = `"./${request.file.path}"`;
	let name = request.file.originalname;
	let proposal = await Proposal.findOne({proposalId: id});

	try {
		switch(attachment) {
			case 'needByDateAttachment':
				attachment = 'needByDateAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					needByDateAttachment: {
						originalname: request.file.originalname,
						name: request.body.proposalId + '_' + request.file.originalname,
						encoding: request.file.encoding,
						mimetype: request.file.mimetype,
						filename: request.body.proposalId + '_' + request.file.originalname,
						path: path,
						size: request.file.size,
						proposalId: request.body.proposalId,
						attachmentType: "Beamtime proposal",
						attachmentName: attachment,
						uploaded: true
					}
				});
				break;
			case 'pbdIdReferenceAttachment':
				attachment = 'pbdIdReferenceAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					pbdIdReferenceAttachment: {
						originalname: request.file.originalname,
						name: request.body.proposalId + '_' + request.file.originalname,
						encoding: request.file.encoding,
						mimetype: request.file.mimetype,
						filename: request.body.proposalId + '_' + request.file.originalname,
						path: path,
						size: request.file.size,
						proposalId: request.body.proposalId,
						attachmentType: "Primary reference(crystallization)",
						attachmentName: attachment,
						uploaded: true
					}
				});
				break;
			case 'organismReferenceAttachment':
				attachment = 'organismReferenceAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					organismReferenceAttachment: {
						originalname: request.file.originalname,
						name: request.body.proposalId + '_' + request.file.originalname,
						encoding: request.file.encoding,
						mimetype: request.file.mimetype,
						filename: request.body.proposalId + '_' + request.file.originalname,
						path: path,
						size: request.file.size,
						proposalId: request.body.proposalId,
						attachmentType: "Primary reference(biomass)",
						attachmentName: attachment,
						uploaded: true
					}
				});
				break;
			case 'needsPurificationSupportAttachment':
				attachment = 'needsPurificationSupportAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					needsPurificationSupportAttachment: {
						originalname: request.file.originalname,
						name: request.body.proposalId + '_' + request.file.originalname,
						encoding: request.file.encoding,
						mimetype: request.file.mimetype,
						filename: request.body.proposalId + '_' + request.file.originalname,
						path: path,
						size: request.file.size,
						proposalId: request.body.proposalId,
						attachmentType: "Primary reference(proteins)",
						attachmentName: attachment,
						uploaded: true
					}
				});

				break;
			case 'chemicalStructureAttachment':
				attachment = 'chemicalStructureAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					chemicalStructureAttachment: {
						originalname: request.file.originalname,
						name: request.body.proposalId + '_' + request.file.originalname,
						encoding: request.file.encoding,
						mimetype: request.file.mimetype,
						filename: request.body.proposalId + '_' + request.file.originalname,
						path: path,
						size: request.file.size,
						proposalId: request.body.proposalId,
						attachmentType: "Chemical structure",
						attachmentName: attachment,
						uploaded: true
					}
				});

				break;
			case 'moleculePreparationReferenceArticle':
				attachment = 'moleculePreparationReferenceArticle';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					moleculePreparationReferenceArticle: {
						originalname: request.file.originalname,
						name: request.body.proposalId + '_' + request.file.originalname,
						encoding: request.file.encoding,
						mimetype: request.file.mimetype,
						filename: request.body.proposalId + '_' + request.file.originalname,
						path: path,
						size: request.file.size,
						proposalId: request.body.proposalId,
						attachmentType: "Primary reference(chemical)",
						attachmentName: attachment,
						uploaded: true
					}
				});

				break;
			case 'proposalTemplate':
				attachment = 'proposalTemplate';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					proposalTemplate: {
						originalname: request.file.originalname,
						name: request.body.proposalId + '_' + request.file.originalname,
						encoding: request.file.encoding,
						mimetype: request.file.mimetype,
						filename: request.body.proposalId + '_' + request.file.originalname,
						path: path,
						size: request.file.size,
						proposalId: request.body.proposalId,
						attachmentType: "DEMAX Proposal",
						attachmentName: attachment,
						uploaded: true
					}
				});
				break;
		}
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
	console.log(proposal.proposalId + ' - uploaded ' + request.file.originalname);
	response.status(201).json('Successfully uploaded ' + request.file.originalname + '. The file has been added to proposal ' + proposal.proposalId);
};

exports.upload = async function(request, response){

	let attachment = request.body.attachmentType;
	let id = request.body.proposalId;
	let path = `"./${request.file.path}"`;
	let name = request.file.originalname;
	let proposal = await Proposal.findOne({proposalId: id});

	try {
		switch(attachment) {
			case 'needByDateAttachment':
				attachment = 'needByDateAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					needByDateAttachment: {
						originalname: request.file.originalname,
						name: request.body.proposalId + '_' + request.file.originalname,
						encoding: request.file.encoding,
						mimetype: request.file.mimetype,
						filename: request.body.proposalId + '_' + request.file.originalname,
						path: path,
						size: request.file.size,
						proposalId: request.body.proposalId,
						attachmentType: "Beamtime proposal",
						attachmentName: attachment,
						uploaded: true
					}
				});
				break;
			case 'pbdIdReferenceAttachment':
				attachment = 'pbdIdReferenceAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					pbdIdReferenceAttachment: {
						originalname: request.file.originalname,
						name: request.body.proposalId + '_' + request.file.originalname,
						encoding: request.file.encoding,
						mimetype: request.file.mimetype,
						filename: request.body.proposalId + '_' + request.file.originalname,
						path: path,
						size: request.file.size,
						proposalId: request.body.proposalId,
						attachmentType: "Primary reference(crystallization)",
						attachmentName: attachment,
						uploaded: true
					}
				});
				break;
			case 'organismReferenceAttachment':
				attachment = 'organismReferenceAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					organismReferenceAttachment: {
						originalname: request.file.originalname,
						name: request.body.proposalId + '_' + request.file.originalname,
						encoding: request.file.encoding,
						mimetype: request.file.mimetype,
						filename: request.body.proposalId + '_' + request.file.originalname,
						path: path,
						size: request.file.size,
						proposalId: request.body.proposalId,
						attachmentType: "Primary reference(biomass)",
						attachmentName: attachment,
						uploaded: true
					}
				});
				break;
			case 'needsPurificationSupportAttachment':
				attachment = 'needsPurificationSupportAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					needsPurificationSupportAttachment: {
						originalname: request.file.originalname,
						name: request.body.proposalId + '_' + request.file.originalname,
						encoding: request.file.encoding,
						mimetype: request.file.mimetype,
						filename: request.body.proposalId + '_' + request.file.originalname,
						path: path,
						size: request.file.size,
						proposalId: request.body.proposalId,
						attachmentType: "Primary reference(proteins)",
						attachmentName: attachment,
						uploaded: true
					}
				});

				break;
			case 'chemicalStructureAttachment':
				attachment = 'chemicalStructureAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					chemicalStructureAttachment: {
						originalname: request.file.originalname,
						name: request.body.proposalId + '_' + request.file.originalname,
						encoding: request.file.encoding,
						mimetype: request.file.mimetype,
						filename: request.body.proposalId + '_' + request.file.originalname,
						path: path,
						size: request.file.size,
						proposalId: request.body.proposalId,
						attachmentType: "Chemical structure",
						attachmentName: attachment,
						uploaded: true
					}
				});

				break;
			case 'moleculePreparationReferenceArticle':
				attachment = 'moleculePreparationReferenceArticle';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					moleculePreparationReferenceArticle: {
						originalname: request.file.originalname,
						name: request.body.proposalId + '_' + request.file.originalname,
						encoding: request.file.encoding,
						mimetype: request.file.mimetype,
						filename: request.body.proposalId + '_' + request.file.originalname,
						path: path,
						size: request.file.size,
						proposalId: request.body.proposalId,
						attachmentType: "Primary reference(chemical)",
						attachmentName: attachment,
						uploaded: true
					}
				});

				break;
			case 'proposalTemplate':
				attachment = 'proposalTemplate';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					proposalTemplate: {
						originalname: request.file.originalname,
						name: request.body.proposalId + '_' + request.file.originalname,
						encoding: request.file.encoding,
						mimetype: request.file.mimetype,
						filename: request.body.proposalId + '_' + request.file.originalname,
						path: path,
						size: request.file.size,
						proposalId: request.body.proposalId,
						attachmentType: "DEMAX Proposal",
						attachmentName: attachment,
						uploaded: true
					}
				});
				break;
		}
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
	console.log(proposal.proposalId + ' - uploaded ' + request.file.originalname);
	response.status(201).json('Successfully uploaded ' + request.file.originalname + '. The file has been added to proposal ' + proposal.proposalId);
};