const fs = require('fs');
const Proposal = require('../../models/proposal.js');

exports.uploadFile = async function(request, response) {
	response.send('Attachment uploaded successfully! -> filename = ' + request.file.name);
};

exports.getAll = async function(request, response) {

	try {
		fs.readdir(__basedir + '/files/uploads/', (err, files) => {
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

exports.deleteFileByFilename = async function(request, response) {

	let filename = request.params.filename;

	try {

		fs.unlink(__basedir + '/files/uploads/' + filename, function(error) {
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

		console.log('_______________________________________________')
		console.log('Proposal ID: ' + id);
		console.log("Attachment: " + attachment);
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
		fs.unlink(__basedir + '/files/uploads/' + request.params.filename, function(error) {
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


