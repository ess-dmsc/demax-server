const Proposal = require('../../models/proposal.js');

async function uploadFile(request, response) {
	let attachment = request.params.attachmentType;
	console.log(attachment)
	let id = request.body.proposalId;
	let path = `"./${request.file.path}"`;
	let name = request.file.originalname;
	let proposal = await Proposal.findOne({proposalId: id});
	console.log(proposal.proposalId)

	try {
		switch(attachment) {
			case 'needByDateAttachment':
				attachment = 'needByDateAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					needByDateAttachment: {
						path: path,
						name: request.file.originalname,
						uploaded: true
					}
				});
				break;
			case 'pbdIdReferenceAttachment':
				attachment = 'pbdIdReferenceAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					pbdIdReferenceAttachment: {
						path: path,
						name: request.file.originalname,
						uploaded: true
					}
				});
				break;
			case 'organismReferenceAttachment':
				attachment = 'organismReferenceAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					organismReferenceAttachment: {
						path: path,
						name: request.file.originalname,
						uploaded: true
					}
				});
				break;
			case 'needsPurificationSupportAttachment':
				attachment = 'needsPurificationSupportAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					needsPurificationSupportAttachment: {
						path: path,
						name: request.file.originalname,
						uploaded: true
					}
				});

				break;
			case 'chemicalStructureAttachment':
				attachment = 'chemicalStructureAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					chemicalStructureAttachment: {
						path: path,
						name: request.file.originalname,
						uploaded: true
					}
				});

				break;
			case 'moleculePreparationReferenceArticle':
				attachment = 'moleculePreparationReferenceArticle';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					moleculePreparationReferenceArticle: {
						path: path,
						name: request.file.originalname,
						uploaded: true
					}
				});

				break;
			case 'proposalTemplate':
				attachment = 'proposalTemplate';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					proposalTemplate: {
						path: path,
						name: request.file.originalname,
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
	response.status(201).json('Successfully uploaded ' + request.file.originalname + '. The file has been added to proposal ' + proposal.proposalId);
};

async function uploadFile2(request, response) {

	const newAttachment = {
		nanoid: nanoid('23456789ABCDEFGHJKLMNPQRSTUVXYZ', 8),
		fieldname: request.file.fieldname,
		originalname: request.file.originalname,
		encoding: request.file.encoding,
		mimetype: request.file.mimetype,
		filename: request.file.filename,
		path: request.file.path,
		size: request.file.size,
		proposal: request.body.proposalId,
		type: request.body.name,
	};
	try {
		await new Attachment(newAttachment).save();
		await Proposal.findOneAndUpdate({proposalId: request.body.proposalId},
			{"$push": {attachments: newAttachment._id}});
		response.status(201).json(newAttachment);
	} catch(error) {
		return response.status(400).json({
			error: error.message
		});
	}
};

module.exports = uploadFile;