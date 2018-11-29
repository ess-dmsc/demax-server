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
const Proposal = require('./models/proposal.js');
const User = require('./models/user.js');
const PDFDocument = require('pdfkit');
const merge = require('easy-pdf-merge');
let GridFsStorage = require('multer-gridfs-storage');
let gridfs = require('gridfs-stream');
const app = express();

app.use(morgan('dev'));
app.use(cors({origin: '*', optionsSuccessStatus: 200}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/test', function(request, response) {
	response.send(`<!DOCTYPE html>
<html>
<head>
<title>Test site</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/flatly/bootstrap.min.css">
</head>
<body>

<div class="row" style="margin: 3rem auto;">
<header>
<img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/ESS_Logo_Frugal_Blue_cmyk.png" width="200" alt="logo">
</header>
    <div class="col-md-8" style="margin: 2rem auto;">
        <h1>Merge multiple PDF's</h1>
        <h1>Generate PDF</h1>
        <h1>Upload files</h1>
        <form class="form-horizontal well" method="post" action="/pdf">
            <div class="form-group"><label class="col-md-2 control-label">request.body.filename</label>
                <div class="col-md-10">
                    <div class="input-group">
                    <input class="form-control" type="text" name="filename" placeholder="Will this text appear as the file name?">
                        <div class="input-group-addon">.pdf</div>
                    </div>
                </div>
            </div>
            <div class="form-group"><label class="col-md-2 control-label">request.body.content</label>
                <div class="col-md-10"><textarea class="form-control" name="content" placeholder="Will this text appear in the PDF?"></textarea></div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                <input class="btn btn-danger" id="actionButton" type="submit" value="Generate PDF"></div>
                <label for="actionButton">HTTP.POST('http://127.0.0.1:8080/pdf', {request.body})</label>
            </div>
        </form>
    </div>
</div>
<div>
<form action="http://localhost:8080/upload" enctype="multipart/form-data" method="post">
    <input type="file" name="upload" multiple>
    <input type="submit" value="Upload">
</form>
</div>
</body>
</html>`);
});


mongoose.Promise = global.Promise;
const connection = mongoose.connection;
gridfs.mongo = mongoose.mongo;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/ess", {useNewUrlParser: true}, function(err, client) {
	if(err) {console.log(err); process.exit(1);}
	console.log("\n" + Date.now() + "\nDB_CONN:SUCCESS\nHOST: 127.0.0.1\nPORT: 27017\n");
});
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
	console.log('successful db connection');
	const gfs = gridfs(connection.db);

	app.post('/upload', function(request, response) {
		const form = new formidable.IncomingForm();
		form.parse(request);
		form.on('fileBegin', function(name, file) {
			file.path = __dirname + '/_root/uploads/' + file.name;
			const filename = file.name;
			const writestream = gfs.createWriteStream({filename: filename});
			fs.createReadStream(__dirname + "/_root/uploads/" + filename).pipe(writestream);
			writestream.on('close', (file) => {response.send('Stored File: ' + file.filename + '<br><br>       File ID: ' + file._id);});
		});
		form.on('file', function(name, file) {console.log('Uploaded ' + file.name);
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
			const count = await User.count();
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

	app.get('/users:id', async function(request, response) {
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
	app.put('/users:id', async function(request, response) {
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
			await User.findOneAndRemove({
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
			const count = await Proposal.count();
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
		} catch(err) {
			return response.status(500).json({
				error: err.message
			});
		}
	});
	app.put('/proposals/:id', async function(request, response) {
		try {
			await Proposal.findOneAndUpdate({
				_id: request.params.id
			}, request.body);
			response.sendStatus(200);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}

	});
	app.delete('/proposals/:id', async function(request, response) {
		try {
			await Proposal.findOneAndRemove({
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
			callback(null, './_root/uploads');
		},
		filename: (request, file, callback) => {
			callback(null, file.originalname);
		}
	});

	app.use(express.static('public'));

	const paths = {
		pdf: path.join(__dirname, '../demax-server/_root/', 'word.pdf'),
		word: path.join(__dirname, '../demax-server/_root/', 'DEMAX_proposal_template.docx')
	};
	const fileWord = fs.readFileSync(paths.word);
	const filePDF = fs.readFileSync(paths.pdf);

	app.get('/word/attachment', function(request, response, next) {
		const file = fs.createReadStream(paths.word);
		const stat = fs.statSync(paths.word);
		response.setHeader('Content-Length', stat.size);
		response.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
		response.setHeader('Content-Disposition', 'attachment; filename=DEMAX_proposal_template.docx');
		file.pipe(response);
	});

	app.post('/pdf', (request, response) => {
		const doc = new PDFDocument();
		let filename = request.body.filename;
		filename = encodeURIComponent(filename) + '.pdf';
		console.log(request.body);
		response.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
		response.setHeader('Content-type', 'application/pdf');
		doc.fontSize(25).text(request.body.filename);
		doc.save();

		doc.circle(280, 200, 50).fill("#0094CA");
		doc.scale(0.6).translate(470, 130).restore();

		doc.text('This is the file name: ' +
			request.body.filename, 100, 300).font('Times-Roman', 13).moveDown().text(request.body.content, {
			width: 412,
			align: 'justify',
			indent: 30,
			columns: 2,
			height: 300,
			ellipsis: true
		});
		doc.y = 300;
		const content = request.body;
		doc.y = 300;
		doc.text(content, 50, 50);
		doc.pipe(response);
		doc.end();
	});

	app.get('/pdf/merge', (request, response) => {
		merge([ './_root/uploads/file-1542185972868..pdf', './_root/uploads/file-1542205573137..pdf' ],
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
module.exports = {
	app
};
