const expect = require("chai").expect;
const chai = require("chai");
const describe = require("mocha").describe;
const it = require("mocha").it;
chai.use(require("chai-http")).should();

const app = require("../server");
const request = require('supertest');
const User = require('../core/models/user.js');
const Proposal = require("../core/models/proposal.js");

let token;

beforeEach((done) => {
	request(app).post('/api/users/login').send({
		email: 'firstname.lastname@domain.topleveldomain',
		password: 'Password2020',
	}).end((err, response) => {
		token = response.body.token;
		done();
	});
});

describe('POST /api/proposals', function() {

	it('should respond with 201 when created', function(done) {
		let newProposal = {
			"experimentTitle": "test",
			"briefSummary": "test",
			"linksWithIndustry": "no"
		};

		request(app).post('/api/proposals').send(newProposal).set('Accept', 'application/json').set('Authorization', token).expect('Content-Type', /json/).expect(201).end((err) => {
			if(err) return done(err);
			done();
		});
	});
});

describe("proposal", function() {
	it("should have an experiment title", function(done) {
		const testProposal = new Proposal({
			experimentTitle: "Test proposal",
			briefSummary: "Short summary"
		});

		testProposal.validate(function(error) {
			expect(testProposal.experimentTitle).to.exist;
			done();
		});
	});
	it("should have a mongodb ID", function(done) {
		const testProposal = new Proposal({});
		testProposal.validate(function(error) {
			expect(testProposal._id).to.exist;
			done();
		});
	});
	it("should have an brief summary", function(done) {
		const testProposal = new Proposal({
			experimentTitle: "Test proposal",
			briefSummary: "Short summary"
		});

		testProposal.validate(function(error) {
			expect(testProposal.briefSummary).to.exist;
			done();
		});

	});
});
