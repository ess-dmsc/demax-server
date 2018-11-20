const mongoose = require('mongoose');

const chemicalDeuterationSchema = new mongoose.Schema({
	moleculeName: String,
	amount: String,
	amountMotivation: String,
	deuterationLocationAndPercentege: String,
	deuterationLevelMotivation: String,
	chemicalStructure: String,
	hasPreviousProductionExperience: String

});

module.exports = mongoose.model('chemicalDeuteration', chemicalDeuterationSchema);