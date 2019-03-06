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
		email: 'test@test.com',
		password: 'password',
	}).end((err, response) => {
		token = response.body.token; // save the token!
		done();
	});
});

describe("user", function() {
	it("should have an email", function(done) {
		const testUser = new User({
			email: "firstname.lastname@domain.tld",
			firstName: "Firstname"
		});

		testUser.validate(function(error) {
			expect(testUser.email).to.exist;
			done();
		});
	});
	it("should have a firstName", function(done) {
		const testUser = new User({
			email: "test.test@test.test",
			firstName: "Firstname"
		});

		testUser.validate(function(error) {
			expect(testUser.firstName).to.exist;
			done();
		});
	});
	it('can not login using $gt operator', function(done){
		request(app).post('/api/users/login').send({
			"email" : {"$gt":""},
			"password" : {"$gt":""}
		}).end((error, response) =>{
			token = response.body.token;
			console.log(token);
			done();
		})
	})

	it('can not login using $gt:undefined', function(done){

		request(app).post('/api/users/login').send({
			"email" : {"$gt": undefined},
			"password" : {"$gt": undefined}
		}).end((error, response) =>{
			token = response.body.token;
			console.log(token);
			done();
		})
	})

});