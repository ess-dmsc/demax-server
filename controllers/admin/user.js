const User = require('../../models/user.js');

exports.getAll = async function(request, response) {
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

exports.post = async function(request,response){
	try{
		const newUser = request.body;
		await new User(newUser).save();
		response.status(201).json(newUser);
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

exports.get = async function(request, response) {
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

exports.put = async function(request, response) {
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
exports.delete = async function(request, response) {
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