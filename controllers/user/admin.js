const User = require('../../models/user.js');

exports.getAllUsers = async function(request, response) {
	try {
		const docs = await User.find({});
		response.status(200).json(docs);
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};