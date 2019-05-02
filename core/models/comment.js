const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	author: String,
	comment: String,
	timestamps: {createdAt: 'created_at', updatedAt: 'updated_at', deleteAt: 'delete_at'}
});

module.exports = mongoose.model('Comment', commentSchema);
