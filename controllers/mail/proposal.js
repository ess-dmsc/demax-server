const nodemailer = require("nodemailer");

exports.testmail = async function(request, response) {

	try {
		console.log(request.header);

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
			html: `
			<header>
			<h1>Headline h1</h1>
</header>
<main>
<h2>H2 Headline</h2>
<p>
Vad är Lorem Ipsum?
Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.
</p>
</main>`
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