const expect = require('chai').expect;
const chai = require('chai');
const describe = require('mocha').describe;
const it = require('mocha').it;
const mongoose = require('mongoose');
const app = require('../server');

const User = require('../models/user.js');
chai.use(require('chai-http')).should();

describe('Users', () => {

	beforeEach(done => {
		User.findOneAndDelete({}, err => {
			done();
		});
	});

	describe('user', function() {
		it('should have an email', function(done) {
			const testUser = new User({email: 'firstname.lastname@mail.com', firstName: 'Joe'});

			testUser.validate(function(err) {
				expect(testUser.email).to.exist;
				done();
			});
		});
		it('should have a mongodb ID', function(done) {
			const testUser = new User({});
			testUser.validate(function(err) {
				expect(testUser._id).to.exist;
				done();
			});
		});
		it('should have a firstName', function(done) {
			const testUser = new User({email: 'firstname.lastname@mail.com', firstName: 'Joe', role: 'user'});

			testUser.validate(function(err) {
				expect(testUser.email).to.exist;
				done();
			});
		});
	});

	it('should get all the users', done => {
		chai.request(app).get('/users/all').end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('array');
			res.body.length.should.be.eql(0);
			done();
		});

	});

	it('should get users count', done => {
		chai.request(app).get('/users/count').end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('number');
			res.body.should.be.eql(0);
			done();
		});
	});

	it('should create new user', done => {
		const user = new User({email: 'dave@example.com', role: 'user'});
		chai.request(app).post('/register').send(user).end((err, res) => {
			res.should.have.status(201);
			res.body.should.be.a('object');
			res.body.should.have.a.property('email');
			res.body.should.have.a.property('role');
			done();
		});
	});

	it('should get a user by its id', done => {
		const user = new User({ email: 'user@example.com', role: 'user'});
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