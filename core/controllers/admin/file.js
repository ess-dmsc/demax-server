const fs = require('file-system');
const Proposal = require('../../models/proposal.js');

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

exports.get = async function(request, response) {
	try {
		let filename = request.params.filename;
		console.log(filename);
		response.download('./files/uploads/' + filename);
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
}


