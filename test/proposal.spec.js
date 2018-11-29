const expect = require('chai').expect;
const chai = require('chai');
const describe = require('mocha').describe;
const it = require('mocha').it;
const app = require('../server');

const Proposal = require('../models/proposal.js');
chai.use(require('chai-http')).should();

describe('Proposals', () => {

	beforeEach(done => {
		Proposal.findOneAndDelete({}, error => {
			done();
		});
	});

	describe('proposal', function() {
		it('should have an experimentTitle', function(done) {
			const testProposal = new Proposal({experimentTitle: 'firstname.lastname@mail.com', firstName: 'Joe'});

			testProposal.validate(function(err) {
				expect(testProposal.experimentTitle).to.exist;
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
		it('should have a firstName', function(done) {
			const testProposal = new Proposal({experimentTitle: 'firstname.lastname@mail.com', firstName: 'Joe', briefSummary: 'proposal'});

			testProposal.validate(function(err) {
				expect(testProposal.experimentTitle).to.exist;
				done();
			});
		});
	});

	it('should get all the proposals', done => {
		chai.request(app).get('/proposals').end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('array');
			res.body.length.should.be.eql(0);
			done();
		});

	});

	it('should get proposals count', done => {
		chai.request(app).get('/proposals/count').end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('number');
			res.body.should.be.eql(0);
			done();
		});
	});

	it('should create new proposal', done => {
		const proposal = new Proposal({experimentTitle: 'dave@example.com', briefSummary: 'proposal'});
		chai.request(app).post('/proposals').send(proposal).end((err, res) => {
			res.should.have.status(201);
			res.body.should.be.a('object');
			res.body.should.have.a.property('experimentTitle');
			res.body.should.have.a.property('briefSummary');
			done();
		});
	});

	it('should get a proposal by its id', done => {
		const proposal = new Proposal({ experimentTitle: 'proposal@example.com', briefSummary: 'proposal'});
		proposal.save((error, newProposal) => {
			chai.request(app).get(`/proposals/${newProposal.id}`).end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.property('experimentTitle');
				res.body.should.have.property('briefSummary');
				res.body.should.have.property('_id').eql(newProposal.id);
				done();
			});
		});
	});

	it('should update a proposal by its id', done => {
		const proposal = new Proposal({experimentTitle: 'proposal@example.com', briefSummary: 'proposal'});
		proposal.save((error, newProposal) => {
			chai.request(app).put(`/proposals/${newProposal.id}`).send({experimentTitle: 'experimentTitle@experimentTitle.com'}).end((err, res) => {
				res.should.have.status(200);
				done();
			});
		});
	});

	it('should delete a proposal by its id', done => {
		const proposal = new Proposal({briefSummary: 'proposal', experimentTitle: 'proposal@example.com'});
		proposal.save((error, newProposal) => {
			chai.request(app).del(`/proposals/${newProposal.id}`).end((err, res) => {
				res.should.have.status(200);
				done();
			});
		});
	});
});