const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
	experimentTitle: String,
	briefSummary: String,
	mainProposerFirstName: String,
	mainProposerLastName: String,
	mainProposerAffiliation: String,
	mainProposerEmail: String,
	mainProposerPhone: String,
	coProposer: String,
	needByDate: {type: Date},
	needByDateAttachment: {type: String},
	lab: String,
	dateCreated: {
		type: Date,
		default:
			Date.now()
	},
	crystallization: {
		moleculeName: String,
		moleculeIdentifier: String,
		oligomerizationState: String,
		crystalStructureReferencePDF: String,
		crystallizationRequirements: String,
		crystallizationPrecipitantComposition: String,
		previousCrystallizationExperience: String,
		estimatedCrystallizationProductionTime: String,
		typicalCrystalSize: String,
		typicalYieldMgPerLiter: String,
		storageConditions: String,
		stability: String,
		buffer: String,
		levelOfDeuteration: String,
		typicalProteinConcentrationUsed: String
	},
	biomassDeuteration: {
		organismProvidedByUser: String,
		organismDetails: String,
		organismReferencePDF: String,
		amountNeeded: String,
		stateOfMaterial: String,
		amountOfMaterialMotivation: String,
		deuterationLevelRequired: String,
		deuterationLevelMotivation: String
	},
	proteinDeuteration: {
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
	},
	chemicalDeuteration: {
		moleculeName: String,
		amount: String,
		amountMotivation: String,
		deuterationLocationAndPercentege: String,
		deuterationLevelMotivation: String,
		chemicalStructure: String,
		hasPreviousProductionExperience: String
	}
});

module.exports = mongoose.model('Proposal', proposalSchema);
