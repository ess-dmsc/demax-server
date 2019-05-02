const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	commentId: String,
	author: String,
	comment: String,
	proposalId: String,
	timestamps: {createdAt: 'created_at', updatedAt: 'updated_at', deleteAt: 'delete_at'}
});

module.exports = mongoose.model('Comment', commentSchema);
