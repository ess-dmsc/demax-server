const shortid = require('shortid');
const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
	proposalId: {type: String, unique: true, default: shortid.generate},
	dateCreated: {type: Date, default: Date.now()},
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
			coProposerAffiliation: String,
		}
	],
	needByDate: String,
	needByDateMotivation: String,
	lab: String,
	wantsCrystallization: Boolean,
	wantsBiomassDeuteration: Boolean,
	wantsProteinDeuteration: Boolean,
	wantsChemicalDeuteration: Boolean,
	crystallization: {
		moleculeName: String,
		moleculeIdentifier: String,
		molecularWeight: String,
		oligomerizationState: String,
		pbdId: String,
		doi: String,
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
		amountNeeded: String,
		amountNeededMotivation: String,
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
		hasPreparedMolecule: String,
		hasPreparedMoleculeProtocol: String
	},
	attachments:[],
	needByDateAttachment: String,
	pbdIdReferenceAttachment: String,
	organismReferenceAttachment: String,
	needsPurificationSupportAttachment: String,
	chemicalStructureAttachment: String,
	moleculePreparationReferenceArticle: String,
	proposalTemplate: String,

	generatedProposal: String,
	mergedProposal: String,

});

module.exports = mongoose.model('Proposal', proposalSchema);
