const Proposal = require('./core/models/proposal.js';
const User = require('./core/models/user.js';

export const resolvers = {
    Query: {
        async allProposals() {
            return await Proposal.find();
        }
    },
     Query: {
        async allUsers() {
            return await User.find();
        }
    },
    Mutation: {
        async createProposal(root, {
            input
        }) {
            return await Proposal.create(input);
        }
    }
};
