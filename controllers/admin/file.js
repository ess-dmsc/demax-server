const fs = require('fs');
const Proposal = require('../../models/proposal.js');
const Attachment = require('../../models/attachment.js');

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

exports.attachFile = async function (request, response) {

	const newAttachment = {
		originalname: request.file.originalname,
		attachmentType: request.body.attachmentType,
		encoding: request.file.encoding,
		mimetype: request.file.mimetype,
		filename: request.file.filename,
		path: request.file.path,
		size: request.file.size,
		proposal: request.params.proposalId,
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

exports.get = async function(request, response) {
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

exports.delete = async function(request, response) {

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
}


