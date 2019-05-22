const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
	proposalId: {type: String, unique: true},
	cycle: String,
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
	wantsOtherDeuteration: Boolean,
	wantsBiologicalDeuteration: Boolean,
	wantsBiomassDeuteration: Boolean,
	wantsYeastDeuteration: Boolean,
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
		stateOfMaterial: String,
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
	yeastDeuteration: {
		amountNeeded: String,
		amountMotivation: String,
		deuterationLevelRequired: String,
		deuterationLevelMotivation: String
	},
	bioSafety: {
		proteinIsRecombinant: String,
		sampleIsToxin: String,
		sampleIsVirulenceFactor: String,
		sampleIsPrionProtein: String,
		sampleHasHazardousLigand: String,
		sampleActivity: String,
		bioSafetyContainmentLevel: String,
		organismRisk: String,
		organismRiskDetails: String,
		other: String
	},
	chemicalDeuteration: {
		moleculeName: String,
		amount: String,
		amountMotivation: String,
		deuterationLocationAndPercentage: String,
		deuterationLevelMotivation: String,
		hasPreparedMolecule: String,
		other: String
	},
	proposalTemplate: {
		originalname: String,
		name: String,
		encoding: String,
		mimetype: String,
		filename: String,
		path: {type: String, default: './files/error/proposalTemplateError.pdf'},
		size: Number,
		proposalId: String,
		attachmentType: {type: String, default: "DEMAX Proposal"},
		attachmentName: String,
		uploaded: {type: Boolean, default: false}
	},
	needByDateAttachment: {
		originalname: String,
		name: String,
		encoding: String,
		mimetype: String,
		filename: String,
		path: {type: String, default: './files/error/needByDateAttachmentError.pdf'},
		size: Number,
		proposalId: String,
		attachmentType: {type: String, default: "Beamtime proposal"},
		attachmentName: String,
		uploaded: {type: Boolean, default: false}
	},
	pbdIdReferenceAttachment: {
		originalname: String,
		name: String,
		encoding: String,
		mimetype: String,
		filename: String,
		path: String,
		size: Number,
		proposalId: String,
		attachmentType: {type: String, default: "Primary reference(crystallization)"},
		attachmentName: String,
		uploaded: {type: Boolean, default: false}
	},
	organismReferenceAttachment: {
		originalname: String,
		name: String,
		encoding: String,
		mimetype: String,
		filename: String,
		path: String,
		size: Number,
		proposalId: String,
		attachmentType: {type: String, default: "Primary reference(biomass)"},
		attachmentName: String,
		uploaded: {type: Boolean, default: false}
	},
	needsPurificationSupportAttachment: {
		originalname: String,
		name: String,
		encoding: String,
		mimetype: String,
		filename: String,
		path: String,
		size: Number,
		proposalId: String,
		attachmentType: {type: String, default: "Primary reference(proteins)"},
		attachmentName: String,
		uploaded: {type: Boolean, default: false}
	},
	chemicalStructureAttachment: {
		originalname: String,
		name: String,
		encoding: String,
		mimetype: String,
		filename: String,
		path: String,
		size: Number,
		proposalId: String,
		attachmentType: {type: String, default: "Chemical structure"},
		attachmentName: String,
		uploaded: {type: Boolean, default: false}
	},
	moleculePreparationReferenceArticle: {
		originalname: String,
		name: String,
		encoding: String,
		mimetype: String,
		filename: String,
		path: String,
		size: Number,
		proposalId: String,
		attachmentType: {type: String, default: "Protocol for sample preparation"},
		attachmentName: String,
		uploaded: {type: Boolean, default: false}
	},
	generatedProposal: {
		name: String,
		path: {type: String, default: './files/error/generatedProposalError.pdf'},
		generated: {type: Boolean, default: false}
	},
	mergedProposal: {
		name: String,
		path: {type: String, default: './files/error/mergedProposalError.pdf'},
		merged: {type: Boolean, default: false}
	},
	submitted: {type: Boolean, default: false},
	other: String,
	tsf: [
		{
			recommendation: {type: String, default: "no"},
			score: Number,
			author: String
		}
	],
	scienceScore: Number,
	commentsV2: [ {} ],
	comments: [
		{
			author: String,
			comment: String,
			created: Date
		}
	]
});
module.exports = mongoose.model('Proposal', proposalSchema);