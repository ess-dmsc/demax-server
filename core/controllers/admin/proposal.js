const Proposal = require('../../models/proposal.js');
const nanoid = require('nanoid/generate');

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
};


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
};

exports.getByDate = async function(request, response){
	try{
		const docs = await Proposal.find({dateCreated: {$gte: new Date(request.params.startDate), $lt: new Date(request.params.endDate)}})
		response.status(200).json(docs);
	}
	catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
}

exports.getComments = async function(request, response) {
	try {
		let comments = [];
		let proposal = await Proposal.findOne({proposalId: request.params.proposalId});
		for(let comment of proposal.comments) {
			comments.push(comment);
		}
		console.log(comments);
		return response.status(201).json(comments);
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};
exports.addComment = async function(request, response) {
	try {
		console.log(request.body);
		const newComment = {
			comment: request.body.comment,
			author: request.body.author,
			dateCreated: Date.now()
		};
		console.log(request.params.proposalId);
		await Proposal.findOneAndUpdate(
			{proposalId: request.params.proposalId},
			{$push: {comments: newComment}}
		);
		response.status(201).json('Success');

	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

exports.deleteComment = async function(request, response) {
	try {
		await Proposal.findOneAndUpdate({proposalId: request.params.proposalId}, {$pull: {comments: {_id: request.params.commentId}}});
		response.status(201).json('Success');
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

exports.getTsf = async function(request, response) {
	try {
		let tsfArray = [];
		let proposal = await Proposal.findOne({proposalId: request.params.proposalId});
		for(let tsf of proposal.tsf) {
			tsfArray.push(tsf);
		}
		console.log(tsfArray);
		return response.status(201).json(tsfArray);
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};
exports.addTsf = async function(request, response) {
	try {
		console.log(request.body);
		const newTsf = {
			score: request.body.score,
			author: request.body.author,
			recommendation: request.body.recommendation
		};
		console.log(request.params.proposalId);
		await Proposal.findOneAndUpdate(
			{proposalId: request.params.proposalId},
			{$push: {tsf: newTsf}}
		);
		response.status(201).json('Success');

	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

exports.deleteTsf = async function(request, response) {
	try {
		await Proposal.findOneAndUpdate({proposalId: request.params.proposalId}, {$pull: {tsf: {_id: request.params.tsfId}}});
		response.status(201).json('Success');
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

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
};

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
};

exports.get = async function(request, response) {
	try {
		console.log("request.params.proposalId: " + request.params.proposalId);
		const proposal = await Proposal.findOne({proposalId: request.params.proposalId});
		console.log(proposal);
		response.status(201).json(proposal);
	} catch(error) {
		console.log(error);
		return response.status(500).json({
			error: error.message
		});
	}
};

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

};

exports.delete = async function(request, response) {
	try {
		await Proposal.findOneAndDelete({
			proposalId: request.params.proposalId
		});
		console.log(request.params.proposalId);
		response.status(200).json(request.params.proposalId + ' was successfully deleted.');
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};