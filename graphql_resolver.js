const Proposal = require('./core/models/proposal.js');
const User = require('./core/models/user.js');

export const resolvers = {
    Mutation: {
         async editProposal(root, {
            input
        }) {
            return await Proposal.update(input);
        },
         async deleteProposal(root, {
            input
        }) {
            return await Proposal.findOneAndDelete(input);
        }
    }
};
