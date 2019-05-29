const mongoose = require('mongoose');
const Schema = mongoose.schema;

const cycleSchema = new mongoose.Schema({
	submission: {
		startDate: Date,
		endDate: Date
	},
	review: {
		startDate: Date,
		endDate: Date
	},
	notifyUsers: {
		startDate: Date,
		endDate: Date
	},
	cycleId: String,
	runCycle: String,
	wrapUp: String,
	other: String,
	isActive: {type: Boolean, default: false}
});


module.exports = mongoose.model('Cycle', cycleSchema);
