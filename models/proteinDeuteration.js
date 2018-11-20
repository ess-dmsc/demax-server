const mongoose = require('mongoose');

const proteinDeuterationSchema = new mongoose.Schema({
	moleculeIdentifier: String,
	weight: String,
	oligomerizationState: String,
	expressionRequirements: String,
	moleculeOrigin: String,
	expressionPlasmidProvidedByUser: String,
	details: String,
	amountNeeded: String,
	amountNeededMotivation: String,
	deuterationLevelRequired: String,
	deuterationLevelMotivation: String,
	needsPurificationSupport: String,
	purificationExperienceReference_PDF: String,
	hasDoneUnlabeledProteinExpression: String,
	hasProteinPurificationExperience: String,
	proteinPurificationExperienceReferencePDF: String
});

module.exports = mongoose.model('proteinDeuteration', proteinDeuterationSchema);
