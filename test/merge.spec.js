/*const expect = require('chai').expect;
const chai = require('chai');
const describe = require('mocha').describe;
const it = require('mocha').it;
const mergePdf = require('../core/controllers/merge.js');
const Proposal = require('../core/models/proposal.js');

chai.use(require('chai-http')).should();

describe('merged proposal', function() {
	it('should merge all attachments into one document', function(done) {
		
		const testProposal = new Proposal({experimentTitle: 'Test proposal', briefSummary: 'Short summary'});

		testProposal.validate(function(err) {
			//Todo: Merge a various number of PDFs, of different size and type. Check that the merged PDF was created successfully and includes the right number of pages
			done();
		});
	});
});
*/
