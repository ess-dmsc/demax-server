const User = require('../../models/user.js');
const Token = require('../../models/token.js');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const nanoid = require('nanoid/generate');
const bcrypt = require('bcryptjs');

let secret = '3eb64519dc0e32eb7e99d645b44942b1b289970de5f64ffc49922b90d4b6ae58';

exports.checkToken = async function(request, response, next) {

	let token = request.headers[ 'authorization' ];
	if(token.startsWith('Bearer ')) {
		token = token.slice(7, token.length);
	}

	if(token) {
		jwt.verify(token, secret, (error, decoded) => {
			if(error) {
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

exports.register = async function(request, response) {

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
		role: 'user'
	};

	try {
		const newUser = await new User(userData);
		newUser.save(function(error) {
			if(error) {
				throw error;
			}
			let token = new Token({
				_userId: newUser._id,
				token: crypto.randomBytes(16).toString('hex')
			});

			token.save(function(err) {
				if(error) { return response.status(500).send({message: error.message}); }
				let transporter = nodemailer.createTransport({host: "10.0.0.103", port: 25});

				let mailOptions = {
					from: 'noreply@esss.dk',
					to: newUser.email,
					subject: 'Account Verification Token',
					html:
						`
<!DOCTYPE html>
<html>

<head>
<style>
*{
font-family: "Titillium Web", "Helvetica Neue", sans-serif;
text-align: center;
}
button{
padding: 1rem;
width: 200px;
color: white;
background-color: #009EDD;
}
hr{
background-color: #009EDD;
border: solid #009EDD 1px;
color: #009EDD;
width: 80%;
}
footer{
margin-top: 5rem;
}
</style>
</head>

<body>
<header>
<h3>DEMAX User portal Email confirmation</h3>
</header>
<hr>
<a href="http://demaxapi.esss.dk/api/confirmation/${token.token}">
<button>
  Click to confirm email
</button>
</a>

<footer>
<small>You received this email because you registered an account at https://demax.esss.se.</small>
</footer>
</body>

</html>`

				};
				transporter.sendMail(mailOptions, function(error) {
					console.log('http://localhost:3000/api/confirmation/' + token.token)
					if(err) { return response.status(500).send({message: error.message}); }
					response.status(200).send('A verification email has been sent to ' + newUser.email + '.');
				});
			});

		});
		response.status(201).json(newUser);
	} catch(err) {
		return response.status(400).json({
			error: err.message
		});
	}
};

exports.forgotPassword = async function(request, response) {

	try {
		const userEmail = request.params.email;
		const newPassword = nanoid('23456789ABCDEFGHJKLMNPQRSTUVXYZ', 8);
		console.log(newPassword);

		await User.findOneAndUpdate({email: userEmail}, {password: newPassword});

		bcrypt.genSalt(10, function(err, salt) {
			if(err) { return next(err); }
			bcrypt.hash(newPassword, salt, function(error, hash) {
				if(error) { return next(error); }
				user.password = hash;
				next();
			});
		});

		response.status(200).json(newPassword);
	} catch(error) {
		console.log(error);
		return response.status(400).json({error: error.message});
	}

};

exports.confirmationGet = function(req, res, next) {
	console.log("confirmation post");
	//req.assert('email', 'Email is not valid').isEmail();
	//req.assert('email', 'Email cannot be blank').notEmpty();
	//req.assert('token', 'Token cannot be blank').notEmpty();
	//req.sanitize('email').normalizeEmail({ remove_dots: false });

	// Check for validation errors
	//var errors = req.validationErrors();
	//if (errors) return res.status(400).send(errors);
	console.log(req.params.token);

	// Find a matching 	token
	Token.findOne({token: req.params.token}, function(err, token) {
		if(!token) return res.status(400).send({
			type: 'not-verified',
			msg: 'We were unable to find a valid token. Your token my have expired.'
		});

		// If we found a token, find a matching user
		User.findOne({_id: token._userId}, function(err, user) {
			if(!user) return res.status(400).send({msg: 'We were unable to find a user for this token.'});
			if(user.isVerified) return res.status(400).send({
				type: 'already-verified',
				msg: 'This user has already been verified.'
			});

			// Verify and save the user
			user.isVerified = true;
			user.save(function(err) {
				if(err) { return res.status(500).send({msg: err.message}); }
				res.status(200).send("The account has been verified. Please log in.");
			});
		});
	});
};


exports.resendTokenPost = function(req, res, next) {
	req.assert('email', 'Email is not valid').isEmail();
	req.assert('email', 'Email cannot be blank').notEmpty();
	req.sanitize('email').normalizeEmail({remove_dots: false});

	// Check for validation errors
	var errors = req.validationErrors();
	if(errors) return res.status(400).send(errors);

	User.findOne({email: req.body.email}, function(err, user) {
		if(!user) return res.status(400).send({msg: 'We were unable to find a user with that email.'});
		if(user.isVerified) return res.status(400).send({msg: 'This account has already been verified. Please log in.'});

		// Create a verification token, save it, and send email
		var token = new Token({_userId: user._id, token: crypto.randomBytes(16).toString('hex')});

		// Save the token
		token.save(function(err) {
			if(err) { return res.status(500).send({msg: err.message}); }

			// Send the email
			var transporter = nodemailer.createTransport({host: "10.0.0.3", port: 25});
			var mailOptions = {
				from: 'noreply@esss.dk',
				to: user.email,
				subject: 'Account Verification Token',
				text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/api\/confirmation\/' + token.token + '   \n'
			};
			transporter.sendMail(mailOptions, function(err) {
				if(err) { return res.status(500).send({msg: err.message}); }
				res.status(200).send('A verification email has been sent to ' + user.email + '.');
			});
		});

	});
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
