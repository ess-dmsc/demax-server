const mongoose = require('mongoose');
const Schema = mongoose.schema;

const commentSchema = new mongoose.Schema({
	_commentId: String,
	author: String,
	body: String,
	proposalId: String
});

module.exports = mongoose.model('Comment', commentSchema);
