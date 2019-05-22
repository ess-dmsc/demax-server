const Proposal = require('../models/proposal.js');
const Cycle = require('../models/cycle.js');
const nanoid = require('nanoid/generate');
const nodemailer = require('nodemailer');

exports.getAllProposals = async function(request, response) {
	try {
		const docs = await Proposal.find({});
		response.status(200).json(docs);
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

exports.getProposalsByEmail = async function(request, response) {

	try {
		const docs = await Proposal.find({"mainProposer.email": request.params.email});
		response.status(200).json(docs);
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

exports.downloadProposal = async function(request, response) {
	try {
		const proposal = await Proposal.findOne({proposalId: request.params.proposalId});
		response.status(201).download('./files/merged/' + proposal.proposalId + '.pdf');
	} catch(error) {
		console.log(error);
		return response.status(500).json({
			error: error.message
		});
	}
};
exports.getAllProposalMetaInformation = async function(request, response) {
	try {
		const proposals = await Proposal.find({});
		let responseArray = [];
		for(let i in proposals) {
			responseArray.push("Proposal ID:" + proposals[ i ].proposalId);
		}
		response.status(200).json(responseArray);
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

exports.submitNewProposal = async function(request, response) {
	try {
		const newProposal = request.body;
		newProposal.proposalId = nanoid('23456789ABCDEFGHJKLMNPQRSTUVXYZ', 8);
		let cycle = await Cycle.findOne({isActive: true});
		newProposal.cycle = cycle.cycleId;
		await new Proposal(newProposal).save();
		response.status(201).json(newProposal);
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};


exports.getProposalByProposalId = async function(request, response) {
	try {
		const proposal = await Proposal.findOne({proposalId: request.params.proposalId}).select("-comments");
		response.status(201).json(proposal);
	} catch(error) {
		console.log(error);
		return response.status(500).json({
			error: error.message
		});
	}
};

exports.editProposalByProposalId = async function(request, response) {
	try {
		await Proposal.findOneAndUpdate({
			proposalId: request.params.proposalId
		}, request.body);
		response.status(200).json(request.params.proposalId + ' was successfully saved.');
	} catch(error) {
		console.log(error);
		return response.status(200).json({
			error: error.message
		});
	}

};

exports.submitProposal = async function(request, response) {

	try {
		let proposal = await Proposal.findOne({proposalId: request.params.proposalId});

		if(!proposal.proposalTemplate.uploaded) {
			throw new Error("DEMAX proposal");
		}
		else if(!proposal.needByDateAttachment.uploaded) {
			throw new Error("beamtime proposal");
		}
		else if(proposal.wantsChemicalDeuteration && !proposal.chemicalStructureAttachment.uploaded) {
			throw new Error("chemical structure");
		}
		else if(proposal.chemicalDeuteration.hasPreparedMolecule === 'yes' && !proposal.moleculePreparationReferenceArticle.uploaded) {
			throw new Error("primary reference (chemical deuteration)");
		}
		else if(proposal.wantsBiomassDeuteration && !proposal.organismReferenceAttachment.uploaded) {
			throw new Error("primary reference (biomass)");
		}
		else if(proposal.proteinDeuteration.needsPurificationSupport === "yes" && !proposal.needsPurificationSupportAttachment.uploaded) {
			throw new Error("primary reference (proteins)");
		}
		else {
			let transporter = nodemailer.createTransport({host: "10.0.0.103", port: 25});

			let mailOptions = {
				from: 'noreply@demax.esss.se',
				to: proposal.mainProposer.email,
				subject: 'Submitted proposal ' + request.params.proposalId,
				html: `Proposal ${proposal.proposalId} has been submitted.`

			};
			transporter.sendMail(mailOptions, function(error) {
				if(error) {
					console.log(error);
					throw error;
				}
			});
			await Proposal.findOneAndUpdate({proposalId: request.params.proposalId}, {submitted: true});
			return response.status(201).json('Submitted!');
		}

	}
	catch(error) {
		console.log(error);
		return response.status(400).json(error);
	}
};

exports.syncProposal = async function(request, response) {
	try {
		const proposal = await Proposal.findOne({proposalId: request.params.proposalId});
		response.status(201).json(proposal);
	} catch(error) {
		console.log(error);
		return response.status(500).json({
			error: error.message
		});
	}
};

exports.deleteProposalByProposalId = async function(request, response) {
	try {
		await Proposal.findOneAndDelete({
			proposalId: request.params.proposalId
		});
		response.status(200).json(request.params.proposalId + ' was successfully deleted.');
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

throwError = (code, errorType, errorMessage) => error => {
	if(!error) error = new Error(errorMessage || 'Default Error');
	error.code = code;
	error.errorType = errorType;
	throw error;
};

cess = (res, message) => data => {
	res.status(200).json({type: 'success', message, data});
};
sendError = (res, status, message) => error => {
	res.status(status || error.status).json({
		type: 'error',
		message: message || error.message,
		error
	});
};
