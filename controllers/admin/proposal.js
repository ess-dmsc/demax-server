const Proposal = require('../../models/proposal.js');
const nanoid = require('nanoid/generate');
const jwt = require('jsonwebtoken');

exports.getAll = async function(request, response) {
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

exports.getByEmail = async function(request, response) {

	try {
		const docs = await Proposal.find({"mainProposer.email": request.params.email});
		response.status(200).json(docs);
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
}
exports.getMeta = async function(request, response) {
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

exports.post = async function(request, response) {
	try {
		const newProposal = request.body;
		newProposal.proposalId = nanoid('23456789ABCDEFGHJKLMNPQRSTUVXYZ', 8);
		await new Proposal(newProposal).save();
		console.log('Created proposal ' + newProposal.proposalId);
		response.status(201).json(newProposal);
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
}

exports.get = async function(request, response) {
	try {
		console.log("request.params.proposalId: " + request.params.proposalId)
		const proposal = await Proposal.findOne({proposalId: request.params.proposalId});
		console.log(proposal)
		response.status(201).json(proposal);
	} catch(error) {
		console.log(error);
		return response.status(500).json({
			error: error.message
		});
	}
}

exports.edit = async function(request, response) {
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

}

exports.delete = async function(request, response) {
	try {
		await Proposal.findOneAndDelete({
			proposalId: request.params.proposalId
		});
		console.log(request.params.proposalId)
		response.status(200).json(request.params.proposalId + ' was successfully deleted.');
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
}