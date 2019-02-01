const shortid = require('shortid');
const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
	proposalId: {type: String, unique: true},
	dateCreated: {type: Date, default: Date.now()},
	experimentTitle: String,
	briefSummary: String,
	mainProposer: {
		firstName: String,
		lastName: String,
		email: String,
		phone: String,
		industry: String,
		employer: String,
		jobTitle: String
	},
	coProposers: [
		{
			firstName: String,
			lastName: String,
			email: String,
			affiliation: String
		}
	],
	needByDate: String,
	needByDateMotivation: String,
	lab: String,
	linksWithIndustry: String,
	coProposerStudents: String,
	workTowardsStudentsDegree: String,
	wantsCrystallization: Boolean,
	wantsBiologicalDeuteration: Boolean,
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
		typicalProteinConcentrationUsed: String,
		other: String
	},
	biomassDeuteration: {
		organismProvidedByUser: String,
		organismDetails: String,
		amountNeeded: String,
		amountNeededMotivation: String,
		deuterationLevelRequired: String,
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
		expressionPlasmidProvidedByUser: String,
		expressionPlasmidProvidedByUserDetails: String,
		amountNeeded: String,
		amountNeededMotivation: String,
		deuterationLevelRequired: String,
		deuterationLevelMotivation: String,
		needsPurificationSupport: String,
		hasDoneUnlabeledProteinExpression: String,
		typicalYield: String,
		hasDonePurification: String,
		hasProteinDeuterationExperience: String,
		proteinDeuterationResults: String,
		other: String
	},
	bioSafety: {
		bioSafetyContainmentLevel: String,
		organismRisk: String,
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
		other: String
	},
	proposalTemplate: {
		name: String,
		path: {type: String, default: "./files/error/proposalTemplateError.pdf"}
	},
	generatedProposal: {
		name: String,
		path: {type: String, default: "./files/error/generatedProposalError.pdf"}
	},
	needByDateAttachment: {
		name: String,
		path: {type: String, default: "./files/error/needByDateAttachmentError.pdf"}
	},
	mergedProposal: {
		name: String,
		path: {type: String, default: "./files/error/mergedProposalError.pdf"}
	},
	pbdIdReferenceAttachment: {
		name: String,
		path: {type: String, default: "./files/error/pbdIdReferenceAttachmentError.pdf"}
	},
	organismReferenceAttachment: {
		name: String,
		path: {type: String, default: "./files/error/organismReferenceAttachmentError.pdf"}
	},
	needsPurificationSupportAttachment: {
		name: String,
		path: {type: String, default: "./files/error/needsPurificationSupportAttachmentError.pdf"}
	},
	chemicalStructureAttachment: {
		name: String,
		path: {type: String, default: "./files/error/chemicalStructureAttachmentError.pdf"}
	},
	moleculePreparationReferenceArticle: {
		name: String,
		path: {type: String, default: "./files/error/moleculePreparationReferenceArticleError.pdf"}
	},
	submitted: {type: Boolean, default: false},
});
module.exports = mongoose.model('Proposal', proposalSchema);
