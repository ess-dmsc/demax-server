const User = require('../../models/user.js');
const jwt = require('jsonwebtoken');

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
				'3eb64519dc0e32eb7e99d645b44942b1b289970de5f64ffc49922b90d4b6ae58');
			response.status(200).json({
				token: token
			});
		});
	});
};