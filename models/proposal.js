const shortid = require('shortid');
const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
	proposalId: {type: String, unique: true, default: shortid.generate},
	dateCreated: {type: Date, default: Date.now()},
	experimentTitle: String,
	briefSummary: String,
	mainProposer: {
		firstName: String,
		lastName: String,
		email: String,
		phone: String,
		affiliation: {
			name: String,
			street: String,
			zipCode: String,
			country: String
		}
	},
	coProposers: [
		{
			firstName: String,
			lastName: String,
			email: String,
			phone: String,
			affiliation: String
		}
	],
	needByDate: String,
	needByDateMotivation: String,
	lab: String,
	linksWithIndustry: Boolean,
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
		levelOfDeuteration: Boolean,
		typicalProteinConcentrationUsed: String,
		other: String
	},
	biomassDeuteration: {
		organismProvidedByUser: Boolean,
		organismDetails: String,
		amountNeeded: String,
		amountNeededMotivation: String,
		deuterationLevelRequired: Boolean,
		deuterationLevelMotivation: String,
		other: String
	},
	proteinDeuteration: {
		moleculeName: String,
		moleculeIdentifier: String,
		molecularWeight: String,
		oligomerizationState: String,
		expressionRequirements: String,
		moleculeOrigin: String,
		expressionPlasmidProvidedByUser: Boolean,
		expressionPlasmidProvidedByUserDetails: String,
		amountNeeded: String,
		amountNeededMotivation: String,
		deuterationLevelRequired: String,
		deuterationLevelMotivation: String,
		needsPurificationSupport: Boolean,
		hasDoneUnlabeledProteinExpression: Boolean,
		typicalYield: String,
		hasDonePurification: Boolean,
		hasProteinPurificationExperience: Boolean,
		proteinDeuterationResults: String,
		other: String
	},
	bioSafety: {
		bioSafetyContainmentLevel: {
			l1: Boolean,
			l2: Boolean
		},
		organismRisk: Boolean,
		organismRiskDetails: String,
		other: String
	},
	chemicalDeuteration: {
		moleculeName: String,
		amount: String,
		amountMotivation: String,
		deuterationLocationAndPercentege: String,
		deuterationLevelMotivation: String,
		hasPreparedMolecule: String,
		hasPreparedMoleculeProtocol: String,
		other: String
	},
	submitted: Boolean,
	other: String,
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
