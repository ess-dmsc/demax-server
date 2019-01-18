const shortid = require('shortid');
const mongoose = require('mongoose');
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

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
		employer: String,
		sector: String,
		title: String
	},
	coProposers: [
		{
			firstName: String,
			lastName: String,
			affiliation: String
		}
	],
	needByDate: String,
	needByDateMotivation: String,
	lab: String,
	linksWithIndustry: String,
	coProposerStudents: String,
	workTowardsStudentsDegree: String,
	wantsCrystallization: String,
	wantsBiomassDeuteration: String,
	wantsProteinDeuteration: String,
	wantsChemicalDeuteration: String,
	crystallization: {
		moleculeNameQ: {type: String, default: "Name of molecule to be crystallized (e.g. superoxide dismutase)"},
		moleculeName: String,
		moleculeIdentifierQ: {type: String, default: "FASTA sequence or Uniprot number"},
		moleculeIdentifier: String,
		molecularWeightQ: {type: String, default: "Molecular weight (kDA)"},
		molecularWeight: String,
		oligomerizationStateQ: {type: String, default: "Oligomerizarion state? (e.g. homodimer, tetramer etc.)"},
		oligomerizationState: String,
		pbdIdQ: {type: String, default: "PDB ID of crystal structure"},
		pbdId: String,
		doiQ: {
			type: String,
			default: "If the PDB reference is openly accessible, please provide a DOI. Otherwise, upload a primary reference below"
		},
		doi: String,
		crystallizationRequirementsQ: {
			type: String,
			default: "Does the protein have any co-factors or ligands required for crystallization? Specify"
		},
		crystallizationRequirements: String,
		crystallizationPrecipitantCompositionQ: {
			type: String,
			default: "Known crystallization precipitant composition (incl. buffer, salt, additives, pH)"
		},
		crystallizationPrecipitantComposition: String,
		previousCrystallizationExperienceQ: {
			type: String,
			default: "What crystallization method, volume, and temperature have you used in the past? (e.g. vapour diffusion, 10 L drops, room temperature)"
		},
		previousCrystallizationExperience: String,
		estimatedCrystallizationProductionTimeQ: {type: String, default: "How long do your crystals take to appear?"},
		estimatedCrystallizationProductionTime: String,
		typicalCrystalSizeQ: {type: String, default: "What is the typical size of your crystal (m x m x m)"},
		typicalCrystalSize: String,
		typicalYieldMgPerLiterQ: {type: String, default: "Typical yield (mg per liter of culture)"},
		typicalYieldMgPerLiter: String,
		storageConditionsQ: {type: String, default: "Storage conditions (e.g. stable at 4 C or frozen at -20 C)"},
		storageConditions: String,
		stabilityQ: {type: String, default: "Stability"},
		stability: String,
		bufferQ: {type: String, default: "What buffer is your protein in?"},
		buffer: String,
		levelOfDeuterationQ: {type: String, default: "Is your protein partially or fully deuterated?"},
		levelOfDeuteration: String,
		typicalProteinConcentrationUsedQ: {
			type: String,
			default: "What protein concentration do you usually use for crystallization"
		},
		typicalProteinConcentrationUsed: String,
		otherQ: {
			type: String,
			default: "If there is anything else you would like us to know, please enter let us know here"
		},
		other: String
	},
	biomassDeuteration: {
		organismProvidedByUserQ: {
			type: String,
			default: "Will user provide the organism for us to grow under deuterated conditions?"
		},
		organismProvidedByUser: String,
		organismDetailsQ: {type: String, default: "What is the organism?"},
		organismDetails: String,
		amountNeededQ: {type: String, default: "How much material do you need (indicate wet or dry mass)"},
		amountNeeded: String,
		amountNeededMotivationQ: {type: String, default: "Justify amount"},
		amountNeededMotivation: String,
		deuterationLevelRequiredQ: {type: String, default: "Level of deuteration required"},
		deuterationLevelRequired: String,
		deuterationLevelMotivationQ: {type: String, default: "Justify level of D incorporation"},
		deuterationLevelMotivation: String,
		otherQ: {
			type: String,
			default: "If there is anything else you would like us to know, please enter let us know here"
		},
		other: String
	},
	proteinDeuteration: {
		moleculeNameQ: {type: String, default: "Name of molecule to be deuterated (e.g. superoxide dismutase)"},
		moleculeName: String,
		moleculeIdentifierQ: {type: String, default: "FASTA sequence or Uniprot number"},
		moleculeIdentifier: String,
		molecularWeightQ: {type: String, default: "Molecular weight (kDA)"},
		molecularWeight: String,
		oligomerizationStateQ: {type: String, default: "Oligomerizarion state? (e.g. homodimer, tetramer etc.)"},
		oligomerizationState: String,
		expressionRequirementsQ: {
			type: String,
			default: "Does the protein have any co-factors or ligands required for expression? Specify"
		},
		expressionRequirements: String,
		moleculeOriginQ: {type: String, default: "Origin of molecules (e.g. human, E. coli, S. cerevisiae)"},
		moleculeOrigin: String,
		expressionPlasmidProvidedByUserQ: {type: String, default: "Will you provide an expression plasmid?"},
		expressionPlasmidProvidedByUser: String,
		expressionPlasmidProvidedByUserDetailsQ: {
			type: String,
			default: "If “yes”, please provide details (e.g. pET31b, C-terminal His-tag, Amp selection) (If “no”, we will design & order a plasmid commercially)"
		},
		expressionPlasmidProvidedByUserDetails: String,
		amountNeededQ: {type: String, default: "How much material do you need?"},
		amountNeeded: String,
		amountNeededMotivationQ: {type: String, default: "Justify amount"},
		amountNeededMotivation: String,
		deuterationLevelRequiredQ: {type: String, default: "Level of deuteration required"},
		deuterationLevelRequired: String,
		deuterationLevelMotivationQ: {type: String, default: "Justify level of D incorporation"},
		deuterationLevelMotivation: String,
		needsPurificationSupportQ: {
			type: String,
			default: "Will you need DEMAX to purify the protein from deuterated biomass?"
		},
		needsPurificationSupport: String,
		hasDoneUnlabeledProteinExpressionQ: {
			type: String,
			default: "Has expression been done for the unlabeled protein?"
		},
		hasDoneUnlabeledProteinExpression: String,
		typicalYieldQ: {type: String, default: "Typical yield"},
		typicalYield: String,
		hasDonePurificationQ: {type: String, default: "Have you been able to purify the unlabeled protein?"},
		hasDonePurification: String,
		hasProteinDeuterationExperienceQ: {
			type: String,
			default: "Have you tried to deuterate the protein yourself, even in small scale?"
		},
		hasProteinDeuterationExperience: String,
		proteinDeuterationResultsQ: {type: String, default: "Results"},
		proteinDeuterationResults: String,
		otherQ: {
			type: String,
			default: "If there is anything else you would like us to know, please enter let us know here"
		},
		other: String
	},
	bioSafety: {
		bioSafetyContainmentLevelQ: {
			type: String,
			default: "Which biosafety containment level is required to work with your sample?"
		},
		bioSafetyContainmentLevel: String,
		organismRiskQ: {
			type: String,
			default: "Is your organism a live virus, toxin-producing, or pose ay risk to human health and/or the environment? "
		},
		organismRisk: String,
		organismRiskDetailsQ: {type: String, default: "If you chose “yes”, please provide details"},
		organismRiskDetails: String,
		otherQ: {
			type: String,
			default: "If there is anything else you would like us to know, please enter let us know here"
		},
		other: String
	},
	chemicalDeuteration: {
		moleculeNameQ: {type: String, default: "Molecule/s to be deuterated (name)"},
		moleculeName: String,
		amountQ: {type: String, default: "Amount of material required (mass)"},
		amount: String,
		amountMotivationQ: {type: String, default: "Justify amount"},
		amountMotivation: String,
		deuterationLocationAndPercentegeQ: {type: String, default: "Indicate percentage and location of deuteration"},
		deuterationLocationAndPercentege: String,
		deuterationLevelMotivationQ: {type: String, default: "Justify level of deuteration"},
		deuterationLevelMotivation: String,
		hasPreparedMoleculeQ: {
			type: String,
			default: "Has this molecule (or an unlabeled/isotopic analogue) been prepared by yourself or others?"
		},
		hasPreparedMolecule: String,
		otherQ: {
			type: String,
			default: "If there is anything else you would like us to know, please enter let us know here"
		},
		other: String
	},
	proposalTemplate: String,
	generatedProposal: String,
	mergedProposal: String,
	submitted: {type: Boolean, default: false},
	needByDateAttachment: {type: String, default: `"../files/resources/needByDateAttachment.pdf"`},
	pbdIdReferenceAttachment: {type: String, default: `"../files/resources/pbdIdReferenceAttachment.pdf"`},
	organismReferenceAttachment: {type: String, default: `"../files/resources/organismReferenceAttachment.pdf"`},
	needsPurificationSupportAttachment: {type: String, default: `"../files/resources/needsPurificationSupportAttachment.pdf"`},
	chemicalStructureAttachment: {type: String, default: `"../files/resources/chemicalStructureAttachment.pdf"`},
	moleculePreparationReferenceArticle: {type: String, default: `"../files/resources/moleculePreparationReferenceArticle.pdf"`}
});

module.exports = mongoose.model('Proposal', proposalSchema);
