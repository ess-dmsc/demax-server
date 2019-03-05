const expect = require("chai").expect;
const chai = require("chai");
const describe = require("mocha").describe;
const it = require("mocha").it;
chai.use(require("chai-http")).should();

const app = require("../server");
const request = require('supertest');
const Proposal = require("../models/proposal.js");
const User = require('../models/user.js');
let token;

beforeEach((done) => {

	request(app).post('/api/users/login').send({
		email: 'jeremias.hillerberg@esss.se',
		password: 'password',
	}).end((err, response) => {
		token = response.body.token;
		done();
	});
});

chai.use(require('chai-http')).should();

describe("PDF Generator", function() {
	it("should generate a PDF", function(done) {

		const newProposal = new Proposal({
			experimentTitle: '214142214132',
			briefSummary: '123321123',
			mainProposer: {
				firstName: '231231r43',
				lastName: '0928718079123'
			},
			coProposers: [
				{
					firstName: '12321',
					lastName: '332112332'
				},
				{
					firstName: '312132321',
					lastName: '212231213'
				}
			],
			linksWithIndustry: 'yes',
			wantsCrystallization: true,
			wantsChemicalDeuteration: true
		});

		console.log(newProposal);

		newProposal.validate(function(error) {
			if(error) {console.log(error);}
			expect(newProposal.generatedProposal.path).to.exist;
			done();
		});

		return request.post('/api/generate' + newProposal.proposalId).set("Authorization", token).send(newProposal).expect(200).expect(response);

	});
});
