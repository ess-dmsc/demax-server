'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');
const formidable = require('formidable');
const multer = require('multer');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const Proposal = require('./models/proposal.js');
const User = require('./models/user.js');
const PDFDocument = require('pdfkit');
const merge = require('easy-pdf-merge');
let GridFsStorage = require('multer-gridfs-storage');
let gridfs = require('gridfs-stream');

const app = express();

app.use(morgan('dev'));
app.use(cors({
	origin: '*',
	optionsSuccessStatus: 200
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

app.get('/test', function(req, res) {
	res.sendfile('./public/test.html')
});


mongoose.Promise = global.Promise;
const connection = mongoose.connection;
gridfs.mongo = mongoose.mongo;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/ess", {
	useNewUrlParser: true
}, function(error, client) {
	if(error) {
		console.log(error);
		process.exit(1);
	}
	console.log("Connected to database");
});
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
	console.log('successful db connection');
	const gfs = gridfs(connection.db);

	app.get('/api/file/upload', (request, response) => {

		const filename = request.query.filename;

		const writestream = gfs.createWriteStream({
			filename: filename
		});
		fs.createReadStream(__dirname + "/uploads/" + filename).pipe(writestream);
		writestream.on('close', (file) => {
			response.send('Stored File: ' + file.filename + '<br><br>       File ID: ' + file._id);
		});
	});

	app.post('/upload', function(req, res) {
		var form = new formidable.IncomingForm();

		form.parse(req);

		form.on('fileBegin', async function(name, file, error) {
			if(error || !file) {
				res.status(404).send('File Not Found');
				return;
			}
			file.path = __dirname + '/uploads/' + file.name;
			const filename = file.name;

			const writestream = await gfs.createWriteStream({
				filename: filename
			});
			try {
				fs.createReadStream(__dirname + "/uploads/" + filename).pipe(writestream);
				writestream.on('close', (file) => {
					console.log(file._id);
					res.json(file._id);
				});
			}catch(error){
				return response.status(400).json({
					error: err.message
				});
			}
		});

		form.on('file', function(name, file, error) {
			if(error || !file) {
				res.status(404).send('File Not Found');
				return;
			}
			console.log('Uploaded ' + file.name);
		});
	});


	app.get('/api/file/download', (request, response) => {

		const filename = request.query.filename;

		gfs.exist({
			filename: filename
		}, (err, file) => {
			if(err || !file) {
				response.status(404).send('File Not Found');
				return;
			}

			const readstream = gfs.createReadStream({
				filename: filename
			});
			readstream.pipe(response);
		});
	});

	app.get('/api/file/delete', (request, response) => {

		const filename = request.query.filename;

		gfs.exist({
			filename: filename
		}, (err, file) => {
			if(err || !file) {
				response.status(404).send('File Not Found');
				return;
			}

			gfs.remove({
				filename: filename
			}, (err) => {
				if(err) response.status(500).send(err);
				response.send('File Deleted');
			});
		});
	});

	app.get('/api/file/meta', (request, response) => {

		const filename = request.query.filename;

		gfs.exist({
			filename: filename
		}, (err, file) => {
			if(err || !file) {
				response.send('File Not Found');
				return;
			}

			gfs.files.find({
				filename: filename
			}).toArray((err, files) => {
				if(err) response.send(err);
				response.json(files);
			});
		});
	});
	app.post('/login', function(request, response) {
		User.findOne({
			email: request.body.email
		}, (err, user) => {
			if(!user) {
				return response.sendStatus(403);
			}
			user.comparePassword(request.body.password, (error, isMatch) => {
				if(!isMatch) {
					return response.sendStatus(403);
				}
				const token = jwt.sign({
						user: user,
						expiresIn: 5000
					},
					'3eb64519dc0e32eb7e99d645b44942b1b289970de5f64ffc49922b90d4b6ae58');
				response.status(200).json({
					token: token
				});
			});
		});
	});

	app.get('/users/all', async function(request, response) {
		try {
			const docs = await User.find({});
			response.status(200).json(docs);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}
	});
	app.get('/users/count', async function(request, response) {
		try {
			const count = await User.countDocuments();
			response.status(200).json(count);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}
	});

	app.post('/register', async function(request, response) {
		try {
			const obj = await new User(request.body).save();
			response.status(201).json(obj);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}
	});

	app.post('/users', async function(request, response) {
		try {
			const obj = await new User(request.body).save();
			response.status(201).json(obj);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}
	});


	app.get('/users/:id', async function(request, response) {
		try {
			const obj = await User.findOne({
				_id: request.params.id
			});
			response.status(200).json(obj);
		} catch(err) {
			return response.status(500).json({
				error: err.message
			});
		}
	});
	app.put('/users/:id', async function(request, response) {
		try {
			await User.findOneAndUpdate({
				_id: request.params.id
			}, request.body);
			response.sendStatus(200);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}

	});
	app.delete('/users/:id', async function(request, response) {
		try {
			await User.findOneAndDelete({
				_id: request.params.id
			});
			response.sendStatus(200);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}
	});

	app.get('/proposals', async function(request, response) {
		try {
			const docs = await Proposal.find({});
			response.status(200).json(docs);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}
	});

	app.get('/proposals/count', async function(request, response) {
		try {
			const count = await Proposal.countDocuments();
			response.status(200).json(count);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}
	});
	app.post('/proposals', async function(request, response) {
		try {
			const obj = await new Proposal(request.body).save();
			response.status(201).json(obj);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}
	});

	app.get('/proposals/:id', async function(request, response) {
		try {
			const obj = await Proposal.findOne({
				_id: request.params.id
			});
			response.status(200).json(obj);
		} catch(error) {
			return response.status(500).json({
				error: error.message
			});
		}
	});
	app.put('/proposals/:id', async function(request, response) {
		try {
			await Proposal.findOneAndUpdate({
				_id: request.params.id
			}, request.body);
			response.sendStatus(200);
		} catch(error) {
			return response.status(400).json({
				error: error.message
			});
		}

	});
	app.delete('/proposals/:id', async function(request, response) {
		try {
			await Proposal.findOneAndDelete({
				_id: request.params.id
			});
			response.sendStatus(200);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}
	});

	const storage = multer.diskStorage({
		destination: (request, file, callback) => {
			callback(null, './uploads');
		},
		filename: (request, file, callback) => {
			callback(null, file.originalname);
		}
	});

	app.use(express.static('public'));

	const paths = {
		pdf: path.join(__dirname, '../demax-server/', 'word.pdf'),
		word: path.join(__dirname, '../demax-server/', 'DEMAX_proposal_template.docx')
	};
	const fileWord = fs.readFileSync(paths.word);
	const filePDF = fs.readFileSync(paths.pdf);
	app.get('/pdf/attachment', function(request, response, next) {
		const file = fs.createReadStream(paths.pdf);
		const stat = fs.statSync(paths.pdf);
		response.setHeader('Content-Length', stat.size);
		response.setHeader('Content-Type', 'application/pdf');
		response.setHeader('Content-Disposition', 'attachment; filename=word.pdf');
		file.pipe(response);
	});
	app.get('/word/attachment', function(request, response, next) {
		const file = fs.createReadStream(paths.word);
		const stat = fs.statSync(paths.word);
		response.setHeader('Content-Length', stat.size);
		response.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
		response.setHeader('Content-Disposition', 'attachment; filename=DEMAX_proposal_template.docx');
		file.pipe(response);
	});

	app.get('/generate-pdf', function(request, response){
		response.send(`<!DOCTYPE html`)
	})
	app.post('/pdf', (request, response) => {
		const doc = new PDFDocument();
		let filename = request.body.filename;
		filename = encodeURIComponent(filename) + '.pdf';
		console.log(request.body);
		response.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
		response.setHeader('Content-type', 'application/pdf');
		doc.fontSize(25).text(request.body.filename);
		doc.save();
		doc.scale(0.6).translate(470, 130).restore();
		doc.text(request.body.filename, 100, 300).font('Times-Roman', 13).moveDown().text(request.body.content, {
		});
		doc.y = 300;
		const content = request.body;
		doc.y = 300;
		doc.text(content, 50, 50);
		doc.pipe(response);
		doc.end();
	});

	app.get('/pdf/merge', (request, response) => {
		merge([ './uploads/file-1542185972868..pdf', './uploads/file-1542205573137..pdf' ],
			'./merges/merged-pdf.pdf',
			function(err) {

				if(err)
					return console.log(err);

				console.log('Success');

			});
		response.send('Success');

	});

	const server = app.listen(process.env.PORT || 8080, function() {
		const port = server.address().port;
		console.log(Date.now() + "\nSERVICE_START:SUCCESS\nHOST: 127.0.0.1\nPORT: " + port + "\n");
	});
});

module.exports = app.listen(3000);