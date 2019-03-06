const mongoose = require('mongoose');

const attachmentSchema = new mongoose.Schema({
	originalname: String,
	encoding: String,
	mimetype: String,
	filename: String,
	path: String,
	size: Number,
	proposalId: String,
	attachmentType: String,
	uploadedAt: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Attachment', attachmentSchema);
