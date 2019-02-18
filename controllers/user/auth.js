const User = require('../../models/user.js');
const Token = require('../../models/token.js');
const jwt = require('jsonwebtoken');
var crypto = require('crypto');
var nodemailer = require('nodemailer');

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
			var token = new Token ({ _userId: newUser._id, token: crypto.randomBytes(16).toString('hex') });

			// Save the verification token
			token.save(function (err) {
				if (err) { return res.status(500).send({ msg: err.message }); }
	
				// Send the email
				var transporter = nodemailer.createTransport({ host: "10.0.0.103", port: 25 });
				var mailOptions = { from: 'noreply@esss.dk', to: newUser.email, subject: 'Account Verification Token', text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + request.headers.host + '\/confirmation\/' + token.token + '.\n' };
				console.log(mailOptions.text);
				transporter.sendMail(mailOptions, function (err) {
					if (err) { return res.status(500).send({ msg: err.message }); }
					res.status(200).send('A verification email has been sent to ' + user.email + '.');
				});
			});

		});
		response.status(201).json(newUser);
	} catch(err) {
		return response.status(400).json({
			error: err.message
		});
	}
}

exports.confirmationPost = function (req, res, next) {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.assert('token', 'Token cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });

    // Check for validation errors
    var errors = req.validationErrors();
    if (errors) return res.status(400).send(errors);

    // Find a matching token
    Token.findOne({ token: req.body.token }, function (err, token) {
        if (!token) return res.status(400).send({ type: 'not-verified', msg: 'We were unable to find a valid token. Your token my have expired.' });

        // If we found a token, find a matching user
        User.findOne({ _id: token._userId, email: req.body.email }, function (err, user) {
            if (!user) return res.status(400).send({ msg: 'We were unable to find a user for this token.' });
            if (user.isVerified) return res.status(400).send({ type: 'already-verified', msg: 'This user has already been verified.' });

            // Verify and save the user
            user.isVerified = true;
            user.save(function (err) {
                if (err) { return res.status(500).send({ msg: err.message }); }
                res.status(200).send("The account has been verified. Please log in.");
            });
        });
    });
};


exports.resendTokenPost = function (req, res, next) {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });

    // Check for validation errors
    var errors = req.validationErrors();
    if (errors) return res.status(400).send(errors);

    User.findOne({ email: req.body.email }, function (err, user) {
        if (!user) return res.status(400).send({ msg: 'We were unable to find a user with that email.' });
        if (user.isVerified) return res.status(400).send({ msg: 'This account has already been verified. Please log in.' });

        // Create a verification token, save it, and send email
        var token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });

        // Save the token
        token.save(function (err) {
            if (err) { return res.status(500).send({ msg: err.message }); }

            // Send the email
            var transporter = nodemailer.createTransport({ service: 'Sendgrid', auth: { user: process.env.SENDGRID_USERNAME, pass: process.env.SENDGRID_PASSWORD } });
            var mailOptions = { from: 'no-reply@codemoto.io', to: user.email, subject: 'Account Verification Token', text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + token.token + '.\n' };
            transporter.sendMail(mailOptions, function (err) {
                if (err) { return res.status(500).send({ msg: err.message }); }
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
