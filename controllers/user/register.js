const User = require('../../models/user.js');

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
		hasConsentedToEmails: request.body.hasConsentedToEmails,
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
}

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