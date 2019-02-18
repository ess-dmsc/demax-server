const User = require('../../models/user.js');
const jwt = require('jsonwebtoken');
const nanoid = require('nanoid/generate');
const bcrypt = require('bcryptjs');

let secret = '3eb64519dc0e32eb7e99d645b44942b1b289970de5f64ffc49922b90d4b6ae58';

exports.checkToken = async function(request, response, next){

	let token = request.headers['authorization'];
	if (token.startsWith('Bearer ')) {
		token = token.slice(7, token.length);
	}

	if (token) {
		jwt.verify(token, secret, (error, decoded) => {
			if (error) {
				return response.json({
					success: false,
					message: 'Token is not valid'
				});
			} else {
				request.decoded = decoded;
				next();
			}
		});

	} else {
		return response.json({
			success: false,
			message: 'Auth token is not supplied'
		});
	}
};

exports.login = async function(request, response) {
	User.findOne({
		email: request.body.email
	}, (err, user) => {
		if(!user) {
			return response.sendStatus(403);
		}
		user.comparePassword(request.body.password, (error, isMatch) => {
			if(!isMatch) {
				return response.sendStatus(403);
			}
			const token = jwt.sign({
					user: user,
					expiresIn: 5000
				},
				secret);
			response.status(200).json({
				token: token
			});
		});
	});
};

exports.register = async function(request, response){

	await findUserByEmail(request.body.email);

	const userData = {
		email: request.body.email,
		password: request.body.password,
		firstName: request.body.firstName,
		lastName: request.body.lastName,
		phone: request.body.phone,
		industry: request.body.industry,
		employer: request.body.employer,
		jobTitle: request.body.jobTitle,
		hasConsentedToGdpr: request.body.hasConsentedToGdpr,
		hasConsentedToEmails: request.body.hasConsentedToEmails
	};

	try {
		const newUser = await new User(userData);
		newUser.save(function(error) {
			console.log(newUser);
			if(error) {
				throw error;
			}
		});
		response.status(201).json(newUser);
	} catch(err) {
		return response.status(400).json({
			error: err.message
		});
	}
};

exports.forgotPassword = async function(request, response){

	try{
		const userEmail = request.params.email;
		const newPassword = nanoid('23456789ABCDEFGHJKLMNPQRSTUVXYZ', 8);
		console.log(newPassword);

		await User.findOneAndUpdate({email: userEmail},{password: newPassword});

		bcrypt.genSalt(10, function(err, salt) {
			if(err) { return next(err); }
			bcrypt.hash(newPassword, salt, function(error, hash) {
				if(error) { return next(error); }
				user.password = hash;
				next();
			});
		});

		response.status(200).json(newPassword)
	}catch(error){
		console.log(error);
		return response.status(400).json({error: error.message});
	}

};

function findUserByEmail(email) {
	if(email) {
		return new Promise((resolve, reject) => {
			User.findOne({email: email}).exec((error, document) => {
				if(error) return reject(error);
				if(document) return reject(new Error('Email already exists. Please enter another email.'));
				else return resolve(email);
			});
		});
	}
}
