const User = require('../models/user.js');

exports.getUserByEmail = async function(request, response) {
	try {
		const user = await User.findOne({
			email: request.params.email
		});
		response.status(200).json(user);
	} catch(error) {
		console.log(error);
		return response.status(500).json({
			error: error.message
		});
	}
};

exports.editUserByEmail = async function(request, response) {
	try {
		await User.findOneAndUpdate({
			email: request.params.email
		}, request.body);
		response.sendStatus(200);
	} catch(error) {
		return response.status(400).json({
			error: error.message
		});
	}

};
exports.deleteUserByEmail = async function(request, response) {
	try {
		await User.findOneAndDelete({
			email: request.params.email
		});
		response.sendStatus(200);
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};