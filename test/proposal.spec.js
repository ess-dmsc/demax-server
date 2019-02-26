const expect = require("chai").expect;
const chai = require("chai");
const describe = require("mocha").describe;
const it = require("mocha").it;
chai.use(require("chai-http")).should();

const app = require("../server");
const request = require('supertest');
const User = require('../models/user.js');
const Proposal = require("../models/proposal.js");

let token;

beforeEach((done) => {

	request(app).post('/api/users/login').send({
		email: 'test@test.com',
		password: 'password',
	}).end((err, response) => {
		token = response.body.token;
		done();
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
