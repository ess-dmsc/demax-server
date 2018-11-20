const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
	email: {type: String, unique: true, lowercase: true, trim: true},
	password: String,
	role: String
});

userSchema.pre('save', function(next) {
	const user = this;
	if(!user.isModified('password')) { return next(); }
	bcrypt.genSalt(10, function(err, salt) {
		if(err) { return next(err); }
		bcrypt.hash(user.password, salt, function(error, hash) {
			if(error) { return next(error); }
			user.password = hash;
			next();
		});
	});
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if(err) { return callback(err); }
		callback(null, isMatch);
	});
};

userSchema.set('toJSON', {
	transform: function(doc, ret, options) {
		delete ret.password;
		return ret;
	}
});

module.exports = mongoose.model('User', userSchema);