const fs = require('file-system');
const path = require('path');
const stream = require('stream');
const onFinished = require('on-finished');

exports.file = function file (name) {
	return fs.createReadStream(path.join(__dirname, 'files', name))
}

exports.fileSize = function fileSize (path) {
	return fs.statSync(path).size
}

exports.submitForm = function submitForm (multer, form, cb) {
	form.getLength(function (err, length) {
		if (err) return cb(err);

		const req = new stream.PassThrough();

		req.complete = false
		form.once('end', function () {
			req.complete = true
		});

		form.pipe(req);
		req.headers = {
			'content-type': 'multipart/form-data; boundary=' + form.getBoundary(),
			'content-length': length
		};

		multer(req, null, function (err) {
			onFinished(req, function () { cb(err, req) })
		})
	})
};
