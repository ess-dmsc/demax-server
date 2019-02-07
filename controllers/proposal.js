const Proposal = require('../models/proposal.js');
const nanoid = require('nanoid/generate');

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
}

exports.getProposalsByEmail = async function(request, response) {
	try {
		const docs = await Proposal.find({"mainProposer.email": request.params.email});
		console.log(docs);
		response.status(200).json(docs);
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
}
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
}

exports.submitNewProposal = async function(request, response) {
	try {
		console.log('this')
		const newProposal = request.body;
		newProposal.proposalId = nanoid('23456789ABCDEFGHJKLMNPQRSTUVXYZ', 8);
		await new Proposal(newProposal).save();
		console.log(newProposal.proposalId);
		response.status(201).json(newProposal);
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
}

exports.getProposalByProposalId = async function(request, response) {
	try {
		const proposal = await Proposal.findOne(
			{proposalId: request.params.proposalId
			});
		response.status(200).json(proposal);
	} catch(error) {
		console.log(error);
		return response.status(500).json({
			error: error.message
		});
	}
}

exports.editProposalByProposalId = async function(request, response) {
	try {
		await Proposal.findOneAndUpdate({
			proposalId: request.params.id
		}, request.body);
		response.status(200).json(request.params.id + ' was successfully saved.');
	} catch(error) {
		console.log(error);
		return response.status(200).json({
			error: error.message
		});
	}

}

exports.deleteProposalByProposalId = async function(request, response) {
	try {
		await Proposal.findOneAndDelete({
			proposalId: request.params.id
		});
		response.status(200).json(request.params.id + ' was successfully deleted.');
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
}