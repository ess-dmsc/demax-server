const Proposal = require('../models/proposal.js');
const Comment = require('../models/comment.js');

exports.addComment = async function(request, response) {
	let proposal = await Proposal.findOne({proposalId: request.params.proposalId});

	try {
		let comment = {
			author: request.body.comment.author,
			timeStamps: {
				createdAt: Date.now(),
				updated_at: Date.now()
			},
			comment: request.body.comment.comment
		};

		await new Comment(comment).save();
		await Proposal.findOneAndUpdate({proposalId: comment.proposalId});

	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

exports.getComments = async function(request, response) {

	try {
		let comments = await Comment.find({proposalId: request.body.proposalId});
		response.status(200).json(comments);
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};