const assert = require('assert');
const util = require('./_util');
const multer = require('multer');
const temp = require('fs-temp');
const rimraf = require('rimraf');
const FormData = require('form-data');

function generateFilename (request, file, callback) {
	callback(null, file.fieldname + file.originalname)
}

function startsWith (string, start) {
	return (string.substring(0, start.length) === start)
}

describe('Upload', function () {
	const cleanup = [];

	function makeStandardEnv (callback) {
		temp.mkdir(function (error, uploadDir) {
			if (error) return callback(error);

			cleanup.push(uploadDir);

			const storage = multer.diskStorage({
				destination: uploadDir,
				filename: generateFilename
			});

			callback(null, {
				upload: multer({ storage: storage }),
				uploadDir: uploadDir,
				form: new FormData()
			})
		})
	}

	after(function () {
		while (cleanup.length) rimraf.sync(cleanup.pop())
	})

	it('should rename the uploaded file', function (done) {
		makeStandardEnv(function (error, env) {
			if (error) return done(error)

			const parser = env.upload.single('small0')
			env.form.append('small0', util.file('small0.dat'))

			util.submitForm(parser, env.form, function (error, request) {
				assert.ifError(error)
				assert.equal(request.file.filename, 'small0small0.dat')
				done()
			})
		})
	})

	it('should ensure all request.files values (single-file per field) point to an array', function (done) {
		makeStandardEnv(function (error, env) {
			if (error) return done(error)

			const parser = env.upload.single('tiny0')
			env.form.append('tiny0', util.file('tiny0.dat'))

			util.submitForm(parser, env.form, function (error, request) {
				assert.ifError(error)
				assert.equal(request.file.filename, 'tiny0tiny0.dat')
				done()
			})
		})
	})

	it('should rename the destination directory to a different directory', function (done) {
		const storage = multer.diskStorage({
			destination: function (request, file, callback) {
				temp.template('testforme-%s').mkdir(function (error, uploadDir) {
					if (error) return callback(error)

					cleanup.push(uploadDir)
					callback(null, uploadDir)
				})
			},
			filename: generateFilename
		})

		const form = new FormData()
		const upload = multer({ storage: storage })
		const parser = upload.array('themFiles', 2)

		form.append('themFiles', util.file('small0.dat'))
		form.append('themFiles', util.file('small1.dat'))

		util.submitForm(parser, form, function (error, request) {
			assert.ifError(error)
			assert.equal(request.files.length, 2)
			assert.ok(request.files[0].path.indexOf('/testforme-') >= 0)
			assert.ok(request.files[1].path.indexOf('/testforme-') >= 0)
			done()
		})
	})

})
