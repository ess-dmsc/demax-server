const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
	experimentTitle: String,
	briefSummary: String,
	mainProposerFirstName: String,
	mainProposerLastName: String,
	mainProposerAffiliation: String,
	mainProposerEmail: String,
	mainProposerPhone: String,
	coProposers: [
		{
			coProposerFirstName: String,
			coProposerLastName: String,
			coProposerEmail: String,
			coProposerPhone: String,
			coProposerAffiliation: String
		}
	],
	needByDate: String,
	needByDateMotivation: String,
	needByDateAttachment: String,
	lab: String,
	dateCreated: {
		type: Date,
		default:
			Date.now()
	},
	crystallization: {
		moleculeName: String,
		moleculeIdentifier: String,
		molecularWeight: String,
		oligomerizationState: String,
		pbdId: String,
		doi: String,
		referenceAttachment: String,
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
		organismReferenceAttachment: String,
		amountNeeded: String,
		amountNeededMotivation,
		deuterationLevelRequired: String,
		deuterationLevelMotivation: String
	},
	proteinDeuteration: {
		moleculeName: String,
		moleculeIdentifier: String,
		molecularWeight: String,
		oligomerizationState: String,
		expressionRequirements: String,
		moleculeOrigin: String,
		expressionPlasmidProvidedByUser: String,
		expressionPlasmidProvidedByUserDetails: String,
		amountNeeded: String,
		amountNeededMotivation: String,
		deuterationLevelRequired: String,
		deuterationLevelMotivation: String,
		needsPurificationSupport: String,
		needsPurificationSupportAttachment: String,
		hasDoneUnlabeledProteinExpression: String,
		hasDonePurification: String,
		hasProteinPurificationExperience: String,
		proteinDeuterationResults: String
	},
	bioSafety: {
		bioSafetyContainmentLevel: String,
		organismRisk: String,
		organismRiskDetails: String
	},
	chemicalDeuteration: {
		moleculeName: String,
		amount: String,
		amountMotivation: String,
		deuterationLocationAndPercentege: String,
		deuterationLevelMotivation: String,
		chemicalStructureAttachment: String,
		hasPreparedMolecule: String,
		hasPreparedMoleculeProtocol: String
	},
	proposalTemplate:String
});

module.exports = mongoose.model('Proposal', proposalSchema);
