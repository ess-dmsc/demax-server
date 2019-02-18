/*const expect = require('chai').expect;
const chai = require('chai');
const describe = require('mocha').describe;
const it = require('mocha').it;
const generatePDF = require('../controllers/pdf/generate.js');

const Proposal = require('../models/proposal.js');
chai.use(require('chai-http')).should();

describe('generated proposal', function() {
	it('should generate a PDF from the information in the proposal', function(done) {

		const testProposal = new Proposal({experimentTitle: 'Test proposal', briefSummary: 'Short summary'});

		testProposal.validate(function(err) {
			//Todo: Create and populate several proposals with a varying amount of information. Check that the PDF was generated properly and contains the right information
			done();
		});
	});
});*/