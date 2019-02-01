const mongoose = require('mongoose');

const attachmentSchema = new mongoose.Schema({
	nanoid: String,
	fieldname: String,
	originalname: String,
	encoding: String,
	mimetype: String,
	filename: String,
	path: String,
	size: Number,
	proposalId: String,
	type: String,
	uploadedAt: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Attachment', attachmentSchema);
