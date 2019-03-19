const Token = require('../core/models/token.js');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const nanoid = require('nanoid/generate');
const bcrypt = require('bcryptjs');
const User = require('../core/models/user.js');

exports.createMockUser = async function() {

	const userData = {
		email: 'firstname.lastname@domain.topleveldomain',
		password: 'Password2020',
		firstName: 'Firstname',
		lastName: 'Lastname',
		phone: '+46123456789',
		industry: 'Testing',
		employer: 'Test, Inc',
		jobTitle: 'Tester',
		hasConsentedToGdpr: "yes",
		hasConsentedToEmails: "yes",
		hasConsentedToCookies: "yes",
		role: 'admin',
		isVerified: true
	};

	try {
		const newUser = await new User(userData);
		newUser.save(function(error) {
			if(error) {
				console.log(error);
				throw error;
			}

		});
	} catch(error) {
		console.log(error);
	}
}