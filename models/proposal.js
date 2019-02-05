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
	linksWithIndustryDetails: String,
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
		hasDoneProteinPurification: String,
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
		path: String,
		uploaded: {type: Boolean, default: false}
	},
	generatedProposal: {
		name: String,
		path: String,
		generated: {type: Boolean, default: false}
	},
	needByDateAttachment: {
		name: String,
		path: String,
		uploaded: {type: Boolean, default: false}
	},
	mergedProposal: {
		name: String,
		path: String,
		merged: {type: Boolean, default: false}
	},
	pbdIdReferenceAttachment: {
		name: String,
		path: String,
		uploaded: {type: Boolean, default: false}
	},
	organismReferenceAttachment: {
		name: String,
		path: String,
		uploaded: {type: Boolean, default: false}
	},
	needsPurificationSupportAttachment: {
		name: String,
		path: String,
		uploaded: {type: Boolean, default: false}
	},
	chemicalStructureAttachment: {
		name: String,
		path: String,
		uploaded: {type: Boolean, default: false}
	},
	moleculePreparationReferenceArticle: {
		name: String,
		path: String,
		uploaded: {type: Boolean, default: false}
	},
	submitted: {type: Boolean, default: false},
});
module.exports = mongoose.model('Proposal', proposalSchema);
