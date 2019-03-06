const expect = require("chai").expect;
const chai = require("chai");
const describe = require("mocha").describe;
const it = require("mocha").it;
chai.use(require("chai-http")).should();

const app = require("../server");
const request = require('supertest');

let token;

beforeEach((done) => {

	request(app).post('/api/users/login').send({
		email: 'test@test.com',
		password: 'password',
	}).end((err, response) => {
		token = response.body.token; // save the token!
		done();
	});
});

describe("Checks", function() {
	it("should be possible to download DEMAX_proposal_template.docx", function(done) {
		request(app).get('/api/word/template')
		.end((error, response) => {
			if(error) {console.log(error);}
			done();
		});

	});

});