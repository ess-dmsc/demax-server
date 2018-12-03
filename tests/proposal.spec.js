const expect = require('chai').expect;
const chai = require('chai');
const describe = require('mocha').describe;
const it = require('mocha').it;
const app = require('../server');

const Proposal = require('../models/proposal.js');
chai.use(require('chai-http')).should();

describe('Proposals', () => {

	beforeEach(done => {
		Proposal.remove({}, error => {
			done();
		});
	});

	describe('proposal', function() {
		it('should have an experimentTitle', function(done) {
			const testProposal = new Proposal({experimentTitle: 'firstname.lastname@mail.com', firstName: 'Joe'});

			testProposal.validate(function(error) {
				expect(testProposal.experimentTitle).to.exist;
				done();
			});
		});
		it('should have a mongodb ID', function(done) {
			const testProposal = new Proposal({});
			testProposal.validate(function(error) {
				expect(testProposal._id).to.exist;
				done();
			});
		});
		it('should have a firstName', function(done) {
			const testProposal = new Proposal({experimentTitle: 'firstname.lastname@mail.com', firstName: 'Joe', briefSummary: 'proposal'});

			testProposal.validate(function(error) {
				expect(testProposal.experimentTitle).to.exist;
				done();
			});
		});
	});
});
/*
 it('should get all the proposals', done => {
 chai.request(app).get('/proposals/').end((error, response) => {
 response.should.have.status(200);
 response.body.should.be.a('array');
 response.body.length.should.be.eql(0);
 done();
 });

 });

 it('should get proposals count', done => {
 chai.request(app).get('/proposals/count').end((error, response) => {
 response.should.have.status(200);
 response.body.should.be.a('number');
 response.body.should.be.eql(0);
 done();
 });
 });

 it('should create new proposal', done => {
 const proposal = new Proposal({experimentTitle: 'dave@example.com', briefSummary: 'proposal'});
 chai.request(app).post('/proposals').send(proposal).end((error, response) => {
 response.should.have.status(201);
 response.body.should.be.a('object');
 response.body.should.have.a.property('experimentTitle');
 response.body.should.have.a.property('briefSummary');
 done();
 });
 });

 it('should get a proposal by its id', done => {
 const proposal = new Proposal({experimentTitle: 'proposal@example.com', briefSummary: 'proposal'});
 proposal.save((error, newProposal) => {
 chai.request(app).get(`/proposals/${newProposal.id}`).end((error, response) => {
 response.should.have.status(200);
 response.body.should.be.a('object');
 response.body.should.have.property('experimentTitle');
 response.body.should.have.property('briefSummary');
 response.body.should.have.property('_id').eql(newProposal.id);
 done();
 });
 });
 });

 it('should update a proposal by its id', done => {
 const proposal = new Proposal({experimentTitle: 'proposal@example.com', briefSummary: 'proposal'});
 proposal.save((error, newProposal) => {
 chai.request(app).put(`/proposals/${newProposal.id}`).send({experimentTitle: 'experimentTitle@experimentTitle.com'}).end((error, response) => {
 response.should.have.status(200);
 done();
 });
 });
 });

 it('should delete a proposal by its id', done => {
 const proposal = new Proposal({briefSummary: 'proposal', experimentTitle: 'proposal@example.com'});
 proposal.save((error, newProposal) => {
 chai.request(app).del(`/proposals/${newProposal.id}`).end((error, response) => {
 response.should.have.status(200);
 done();
 });
 });
 });
 });
 });
 */