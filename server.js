const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');
const IncomingForm = require('formidable').IncomingForm;
const multer = require('multer');
const mongodb = require("mongodb");
const ObjectID = mongodb.ObjectID;
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const PROPOSALS_COLLECTION = "proposals";

const app = express();

app.use(morgan('dev'));
app.use(cors({origin: '*', optionsSuccessStatus: 200}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const storage = multer.diskStorage({
	destination: (request, file, callback) => {
		callback(null, './uploads');
	},
	filename: (request, file, callback) => {
		callback(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
	}
});

const upload = multer({storage: storage});

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

var db;

mongodb.Promise = global.Promise;
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", {useNewUrlParser: true}, function(err, client) {
	if(err) {
		console.log(err);
		process.exit(1);
	}

	// Save database object from the callback for reuse.
	db = client.db();
	console.log("\n" + Date.now() + "\nDB_CONN:SUCCESS\nHOST: 127.0.0.1\nPORT: 27017\n");

	// Initialize the app.
	var server = app.listen(process.env.PORT || 8080, function() {
		var port = server.address().port;
		console.log(Date.now() + "\nSERVICE_START:SUCCESS\nHOST: 127.0.0.1\nPORT: " + port + "\n");
	});
});


function handleError(res, reason, message, code) {
	console.log("ERROR: " + reason);
	res.status(code || 500).json({"error": message});
}

app.get("/api/proposals", function(req, res) {
	db.collection(PROPOSALS_COLLECTION).find({}).toArray(function(err, docs) {
		if(err) {
			handleError(res, err.message, "Failed to get proposals.");
		} else {
			res.status(200).json(docs);
		}
	});
});

app.post("/api/proposals", function(req, res) {
	const newProposal = req.body;
	newProposal.createDate = new Date();

	db.collection(PROPOSALS_COLLECTION).insertOne(newProposal, function(err, doc) {
		if(err) {
			handleError(res, err.message, "Failed to create new proposal.");
		} else {
			res.status(201).json(doc.ops[ 0 ]);
		}
	});
});

app.get("/api/proposals/:id", function(req, res) {
	db.collection(PROPOSALS_COLLECTION).findOne({_id: new ObjectID(req.params.id)}, function(err, doc) {
		if(err) {
			handleError(res, err.message, "Failed to get proposal");
		} else {
			res.status(200).json(doc);
		}
	});
});

app.put("/api/proposals/:id", function(req, res) {
	const updateDoc = req.body;
	delete updateDoc._id;

	db.collection(PROPOSALS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
		if(err) {
			handleError(res, err.message, "Failed to update proposal");
		} else {
			updateDoc._id = req.params.id;
			res.status(200).json(updateDoc);
		}
	});
});

app.delete("/api/proposals/:id", function(req, res) {
	db.collection(PROPOSALS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
		if(err) {
			handleError(res, err.message, "Failed to delete proposal");
		} else {
			res.status(200).json(req.params.id);
		}
	});
});

app.post('/api/upload', upload.single('file'), (req, res) => {
	return res.send({"status": "success"});
});

app.post('/api/upload-form', (req, res) => {
	const form = new IncomingForm();
	let readStream;
	form.on('file', (field, file) => {

		console.log('file', file.name);
		readStream = fs.createReadStream(file.path);
	});
	form.on('end', () => {
		res.json();
	});
	form.parse(req);
});

const paths = {
	pdf: path.join(__dirname, '../demax-server/', 'word.pdf'),
	word: path.join(__dirname, '../demax-server/', 'DEMAX_proposal_template.docx')
};
const fileWord = fs.readFileSync(paths.word);
const filePDF = fs.readFileSync(paths.pdf);
app.get('/pdf/attachment', function(req, res, next) {
	const file = fs.createReadStream(paths.pdf);
	const stat = fs.statSync(paths.pdf);
	res.setHeader('Content-Length', stat.size);
	res.setHeader('Content-Type', 'application/pdf');
	res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
	file.pipe(res);
});
app.get('/word/attachment', function(req, res, next) {
	const file = fs.createReadStream(paths.word);
	const stat = fs.statSync(paths.word);
	res.setHeader('Content-Length', stat.size);
	res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
	res.setHeader('Content-Disposition', 'attachment; filename=quote.docx');
	file.pipe(res);
});