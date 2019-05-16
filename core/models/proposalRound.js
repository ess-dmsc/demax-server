const mongoose = require('mongoose');
const Schema = mongoose.schema;

const proposalRoundSchema = new mongoose.Schema({
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
	runCycle: String,
	wrapUpAndUserSurvey: String,
	proposalRoundId: String,
	year: Number,
	cycleId: Number,
	isActive: {type: Boolean, default: false}
});

module.exports = mongoose.model('ProposalRound', proposalRoundSchema);
