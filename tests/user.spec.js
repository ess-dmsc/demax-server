const expect = require('chai').expect;
const chai = require('chai');
const describe = require('mocha').describe;
const it = require('mocha').it;
const app = require('../server.js');
const User = require('../models/user.js');
chai.use(require('chai-http')).should();
const reqp = require('./request-promise');
/*
describe('sample tests:', function() {
	it('promise correct', function() {
		return reqp.get('http://localhost:3000/api/admin/users').then(function(response) {
			assert.equal(200, response.statusCode);
		})
	});
});

describe('user', function() {

	it('should have an email', async function(done) {
		const testUser = new User({email: 'firstname.lastname@mail.com', firstName: 'Joe', lastName: 'Loe'});

		testUser.validate(function(error) {
			expect(testUser.email).to.exist;
			done();
		});
	});

	it('should create new user', async function(done) {
		const user = new User({email: 'dave@example.com', role: 'user'});
		chai.request(app).post('/api/users/register').send(user).end((err, res) => {
			res.should.have.status(201);
			res.body.should.be.a('object');
			res.body.should.have.a.property('email');
			res.body.should.have.a.property('role');
			done();
		});
	});

	it('should get all the users', done => {
		chai.request(app).get('/api/admin/users').end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('array');
			res.body.length.should.be.eql(0);
			done();
		});

	});

	it('should get a user by its id', done => {
		const user = new User({email: 'user@example.com', role: 'user'});
		user.save((error, newUser) => {
			chai.request(app).get(`/users/${newUser.id}`).end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.property('email');
				res.body.should.have.property('role');
				res.body.should.have.property('_id').eql(newUser.id);
				done();
			});
		});
	});

	it('should update a user by its id', done => {
		const user = new User({email: 'user@example.com', role: 'user'});
		user.save((error, newUser) => {
			chai.request(app).put(`/users/${newUser.id}`).send({email: 'email@email.com'}).end((err, res) => {
				res.should.have.status(200);
				done();
			});
		});
	});

	it('should delete a user by its id', done => {
		const user = new User({role: 'user', email: 'user@example.com'});
		user.save((error, newUser) => {
			chai.request(app).del(`/users/${newUser.id}`).end((err, res) => {
				res.should.have.status(200);
				done();
			});
		});
	});

});

*/