const fs = require('fs');

exports.getAll = async function (request, response) {

	try {
		fs.readdir(__basedir + '/files/uploads/', (err, files) => {
			for(let i = 0; i < files.length; ++i) {
				files[ i ] = files[ i ];
			}
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
		console.log(filename)
		response.download(__basedir + '/files/uploads/' + filename);
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
		let filename = request.params.filename;
		let proposalId = request.body.proposalId;
		let attachmentType = request.body.attachmentType;

		await Proposal.findOneAndUpdate({proposalId: proposalId}, {});

		fs.unlink(__basedir + '/files/uploads/' + filename, function(error) {
			if(error) {
				console.log(error);
			}
			response.send(filename + ' deleted');
		});
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};


