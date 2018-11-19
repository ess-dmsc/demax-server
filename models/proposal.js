const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
	experimentTitle: String,
	briefSummary: String,
	mainProposer: String,
	coProposers: [
		{
			coProposers: String
		}
	],
	needByDate: {
		motivation: String,
		attachment: String,
	}
	,
	resources: {
		lab: String,
		instrument: String,
		service: String
	},
	dateCreated: {
		type: Date,
		default:
			Date.now()
	},
	deuterationMethods: [
		{
			crystallization: {
				moleculeName: String,
				moleculeIdentifier: String,
				oligomerizationState: String,
				crystalStructureReferencePDF: {
					proposalAttachment: {
						type: mongoose.Schema.Types.ObjectId,
						ref: 'ProposalAttachment'
					}
				},
				crystallizationRequirements: String,
				crystallizationPrecipitant_composition: String,
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
			biologic: {
				biomass: {
					organismProvidedByUser: String,
					organismDetails: String,
					organismReferencePDF: {
						proposalAttachment: {
							type: mongoose.Schema.Types.ObjectId,
							ref: 'ProposalAttachment'
						}
					},
					amountNeeded: String,
					stateOfMaterial: String,
					amountOfMaterialMotivation: String,
					deuterationLevelRequired: String,
					deuterationLevelMotivation: String,
				},
				protein: {
					moleculeName: String,
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
					purificationExperienceReference_PDF: {
						proposalAttachment: {
							type: mongoose.Schema.Types.ObjectId,
							ref: 'ProposalAttachment'
						}
					},
					hasDoneUnlabeledProteinExpression: String,
					hasProteinPurificationExperience: String,
					proteinPurificationExperienceReferencePDF: {
						proposalAttachment: {
							type: mongoose.Schema.Types.ObjectId,
							ref: 'ProposalAttachment'
						}
					},

				},
			},
			chemical: {
				moleculeName: String,
				amount: String,
				amountMotivation: String,
				deuterationLocationAndPercentege: String,
				deuterationLevelMotivation: String,
				chemicalStructure: {
					proposalAttachment: {
						type: mongoose.Schema.Types.ObjectId,
						ref: 'ProposalAttachment'
					}
				},
				hasPreviousProductionExperience: {
					proposalAttachment: {
						type: mongoose.Schema.Types.ObjectId,
						ref: 'ProposalAttachment'
					}
				},
			}

		}
	]
})
;

module.exports = mongoose.model('Proposal', proposalSchema);
