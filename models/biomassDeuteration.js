const mongoose = require('mongoose');

const biomassDeuterationSchema = new mongoose.Schema({
	organismProvidedByUser: String,
	organismDetails: String,
	organismReferencePDF: String,
	amountNeeded: String,
	stateOfMaterial: String,
	amountOfMaterialMotivation: String,
	deuterationLevelRequired: String,
	deuterationLevelMotivation: String
});

module.exports = mongoose.model('biomassDeuteration', biomassDeuterationSchema);