const User = require('../../models/user.js');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

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

exports.changePassword = async function(request, response){
	try{
		var newPassword = request.params.password;
		console.log(request.body.password)
		await bcrypt.genSalt(10, function(error, salt) {
			if(error) { console.log(error)

				return next(error); }
			bcrypt.hash(newPassword, salt, function(error, hash) {
				if(error) {
					console.log(error);
				}
				newPassword = hash;
				changePassword(request.params.email, newPassword);
				return response.status(200).json('Successfully changed password')
			});
		});

	}catch(error){
		console.log(error)
		return response.status(400).json({
			error: error.message
		})
	}
};

async function changePassword(email, password){
	try{
		await User.findOneAndUpdate({email: email}, {password: password});
	}catch(error){
		console.log(error)
	}
}

exports.put = async function(request, response) {
	try {
		await User.findOneAndUpdate({
			email: request.params.email
		}, {role: request.body.role});

		var newPassword = request.body.password;
		console.log(request.body.password);
		await bcrypt.genSalt(10, function(error, salt) {
			if(error) { console.log(error);

				return next(error); }
			bcrypt.hash(newPassword, salt, function(error, hash) {
				if(error) {
					console.log(error);
				}
				newPassword = hash;
				changePassword(request.params.email, newPassword);
				return response.status(200).json('Successfully changed password')
			});
		});
	} catch(error) {
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