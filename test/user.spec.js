const expect = require('chai').expect;

const User = require('../models/user.js');

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
		const testUser = new User({email: 'firstname.lastname@mail.com', firstName: 'Joe'});

		testUser.validate(function(err) {
			expect(testUser.email).to.exist;
			done();
		});
	});
});