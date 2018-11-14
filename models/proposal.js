const mongoose = require('mongoose');
import User from './user';

const proposalSchema = new mongoose.Schema({
	reference: String,
	title: {type: String, unique: true, lowercase: true, trim: true},
	summary: String,
	mainProposer: {type: mongoose.Schema.Types.ObjectId, ref: User, required: true},
	coProposers: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
			}
		}
	],
	researchArea: String,
	societalIndicators: Array,
	typeOfProposal: String,
	needByDate: Date,
	dateMotivation: String,
	dateCreated: {type: Date, default: Date.now()},
	beamTimeProposalPDF: String,
	deuterationMethods: [
		{
			crystallization: {
				molecule_name: String,
				molecule_identifier: String,
				oligomerization_state: String,
				crystalStructure_reference_PDF: {
					proposal_attachment: {
						type: mongoose.Schema.Types.ObjectId,
						ref: 'ProposalAttachment'
					}
				},
				crystallization_requirements: String,
				crystallization_precipitant_composition: String,
				previous_crystallization_experience: String,
				estimated_crystallization_productionTime: String,
				typical_crystalSize: String,
				typical_yield_mg_per_liter: String,
				storage_conditions: String,
				stability: String,
				buffer: String,
				level_of_deuteration: String,
				typical_protein_concentration_used: String
			},
			biologic: {
				biomass: {
					organism_provided_by_user: String,
					organism_details: String,
					organism_reference_PDF: {
						proposal_attachment: {
							type: mongoose.Schema.Types.ObjectId,
							ref: 'ProposalAttachment'
						}
					},
					amount_needed: String,
					state_of_material: String,
					amount_of_material_motivation: String,
					deuteration_level_required: String,
					deuteration_level_motivation: String,
				},
				protein: {
					molecule_name: String,
					molecule_identifier: String,
					weight: String,
					oligomerization_state: String,
					expression_requirements: String,
					molecule_origin: String,
					expression_plasmid_provided_by_user: String,
					details: String,
					amount_needed: String,
					amount_needed_motivation: String,
					deuteration_level_required: String,
					deuteration_level_motivation: String,
					needs_purification_support: String,
					purification_experience_reference_PDF: {
						proposal_attachment: {
							type: mongoose.Schema.Types.ObjectId,
							ref: 'ProposalAttachment'
						}
					},
					has_done_unlabeled_protein_expression: String,
					has_protein_purification_experience: String,
					protein_purification_experience_reference_PDF: {
						proposal_attachment: {
							type: mongoose.Schema.Types.ObjectId,
							ref: 'ProposalAttachment'
						}
					},

				},
			},
			chemical: {
				molecule_name: String,
				amount: String,
				amount_motivation: String,
				deuteration_location_and_percentege: String,
				deuteration_level_motivation: String,
				chemical_structure: {
					proposal_attachment: {
						type: mongoose.Schema.Types.ObjectId,
						ref: 'ProposalAttachment'
					}
				},
				has_previous_production_experience: {
					proposal_attachment: {
						type: mongoose.Schema.Types.ObjectId,
						ref: 'ProposalAttachment'
					}
				},
			}

		}
	]
});

proposalSchema.pre('save', function(next) {
	const proposal = this;
	proposal.reference = proposal._created + proposal.mainProposer.email + proposal.title;
	next();
});

const Proposal = mongoose.model('Proposal', proposalSchema);

export default Proposal;
