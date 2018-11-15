const expect = require('chai').expect;

const Proposal = require('../models/proposal.js');

describe('proposal', function() {
	it('should have an experiment title', function(done) {
		const testProposal = new Proposal({experiment_title: 'Test proposal', brief_summary: 'Short summary'});

		testProposal.validate(function(err) {
			expect(testProposal.experiment_title).to.exist;
			done();
		});
	});
	it('should have a mongodb ID', function(done) {
		const testProposal = new Proposal({});
		testProposal.validate(function(err) {
			expect(testProposal._id).to.exist;
			done();
		});
	});
	it('should have an brief summary', function(done) {
		const testProposal = new Proposal({experiment_title: 'Test proposal', brief_summary: 'Short summary'});

		testProposal.validate(function(err) {
			expect(testProposal.brief_summary).to.exist;
			done();
		});
	});
});