const nodemailer = require("nodemailer");

exports.testmail = async function(request, response) {

	try {
		console.log(request.header);

		let transporter = nodemailer.createTransport({
			host: "send.one.com",
			port: 465,
			secure: true,
			auth: {
				user: 'data@ethfruktogront.se',
				pass: 'hanjah07'
			}
		});

		let mailOptions = {
			from: `"DEMAX User Portal" <data@ethfruktogront.se>`,
			to: "jeremias.hillerberg@esss.se, jeremias.hillerberg@esss.se",
			subject: "Submitted proposal 57XTBGDS",
			text: "Not needed if using html",
			attachments: [
				{
					filename: '57XTBGDS.pdf',
					contentType: 'application/pdf',
					path: './files/merged/57XTBGDS.pdf'
				}
			],
			html: `test`
		};

		transporter.sendMail(mailOptions);
		return response.send('Email successfully sent');
	} catch(error) {console.log(error);}
};

exports.sendGeneratedProposal = async function(request, response) {

	try {
		let proposal = await Proposal.findOne({proposalId: request.params.proposalId});

		let transporter = nodemailer.createTransport({
			host: "send.one.com",
			port: 465,
			secure: true,
			auth: {
				user: 'username/email',
				pass: 'password'
			}
		});

		let mailOptions = {
			from: '"DEMAX User Portal" <data@ethfruktogront.se>',
			to: proposal.mainProposer.email,
			subject: "Test email from localhost:3000",
			text: "Hi!",
			html: ``,
			attachments: [
				{
					filename: proposal.proposalId + '.pdf',
					contentType: 'application/pdf',
					path: './files/merged/57XTBGDS.pdf'
				}
			]
		};

		return response.status(200).json('Proposal successfully generated');
	} catch(error) {
		console.log(error);
	}
};