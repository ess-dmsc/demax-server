const Proposal = require('../models/proposal.js');
const fs = require('file-system');
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
		response.download('./files/uploads/' + filename);
	}
	catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

exports.uploadFile = async function(request, response) {
	response.send('Attachment uploaded successfully! -> filename = ' + request.file.name);
};

exports.getAll = async function(request, response) {

	try {
		fs.readdir('./files/uploads/', (err, files) => {
			for(let i = 0; i < files.length; ++i) {
				files[ i ] = files[ i ];
			}
			console.log(files);
			response.send(files);
		});
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

exports.getByFilename = async function(request, response) {
	try {
		let filename = request.params.filename;
		response.download('./files/uploads/' + filename);
	}
	catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

exports.deleteFileByFilename = async function(request, response) {

	let filename = request.params.filename;

	try {

		fs.unlink('./files/uploads/' + filename, function(error) {
			if(error) {
				console.log(error);
			}
			response.status(200).json(filename + ' deleted');
		});

	}

	catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};
exports.deleteFileByProposalIdAndAttachmentType = async function(request, response) {
	try {
		let id = request.params.proposalId;
		let attachment = request.params.attachmentType;
		let filename = request.params.filename;

		let path;

		switch(attachment) {
			case 'needByDateAttachment':
				attachment = 'needByDateAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					needByDateAttachment: {
						originalname: '',
						name:  '',
						encoding:  '',
						mimetype:  '',
						filename:  '',
						path:  '',
						size: '',
						proposalId:  '',
						attachmentType:  '',
						uploaded: false
					}
				});

				break;
			case 'pbdIdReferenceAttachment':
				attachment = 'pbdIdReferenceAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					pbdIdReferenceAttachment: {
						originalname: '',
						name:  '',
						encoding:  '',
						mimetype:  '',
						filename:  '',
						path:  '',
						size: '',
						proposalId:  '',
						attachmentType:  '',
						uploaded: false
					}
				});
				break;
			case 'organismReferenceAttachment':
				attachment = 'organismReferenceAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					organismReferenceAttachment: {
						originalname: '',
						name:  '',
						encoding:  '',
						mimetype:  '',
						filename:  '',
						path:  '',
						size: '',
						proposalId:  '',
						attachmentType:  '',
						uploaded: false
					}
				});
				break;
			case 'needsPurificationSupportAttachment':
				attachment = 'needsPurificationSupportAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					needsPurificationSupportAttachment: {
						originalname: '',
						name:  '',
						encoding:  '',
						mimetype:  '',
						filename:  '',
						path:  '',
						size: '',
						proposalId:  '',
						attachmentType:  '',
						uploaded: false
					}
				});

				break;
			case 'chemicalStructureAttachment':
				attachment = 'chemicalStructureAttachment';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					chemicalStructureAttachment: {
						originalname: '',
						name:  '',
						encoding:  '',
						mimetype:  '',
						filename:  '',
						path:  '',
						size: '',
						proposalId:  '',
						attachmentType:  '',
						uploaded: false
					}
				});

				break;
			case 'moleculePreparationReferenceArticle':
				attachment = 'moleculePreparationReferenceArticle';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					moleculePreparationReferenceArticle: {
						originalname: '',
						name:  '',
						encoding:  '',
						mimetype:  '',
						filename:  '',
						path:  '',
						size: '',
						proposalId:  '',
						attachmentType:  '',
						uploaded: false
					}
				});

				break;
			case 'proposalTemplate':
				attachment = 'proposalTemplate';
				await Proposal.findOneAndUpdate({proposalId: id}, {
					proposalTemplate: {
						originalname: '',
						name:  '',
						encoding:  '',
						mimetype:  '',
						filename:  '',
						path:  '',
						size: '',
						proposalId:  '',
						attachmentType:  '',
						uploaded: false
					}
				});
				break;
		}
		fs.unlink('./files/uploads/' + request.params.filename, function(error) {
			if(error) {
				console.log(error);
				return response.status(400).json({
					error: error.message
				});
			}
			response.send(request.body.filename + ' deleted');
		});
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

exports.uploadAttachment = async function (request, response) {

	let attachment = request.params.attachment;
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
	response.status(201).json('Successfully uploaded ' + request.file.originalname + '. The file has been added to proposal ' + proposal.proposalId);
};

exports.upload = async function(request, response){

	let attachment = request.body.attachmentType;
	let id = request.body.proposalId;
	let path = `"./${request.file.path}"`;
	let proposal = await Proposal.findOne({proposalId: id});
	console.log(request.file.path)

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
	response.status(201).json('Successfully uploaded ' + request.file.originalname + '. The file has been added to proposal ' + proposal.proposalId);
};