const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');
const IncomingForm = require('formidable').IncomingForm;
const multer = require('multer');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const Proposal = require('./models/proposal.js');
const app = express();
const PDFDocument = require('pdfkit');

const userSchema = new mongoose.Schema({
	email: {type: String, unique: true, lowercase: true, trim: true},
	password: String,
	username: String,
	role: String,
	firstname: String,
	lastname: String,
	employerSector: String,
	employerName: String,
	employerStreet: String,
	employerZipcode: String,
	employerCity: String,
	employerCountry: String,
	employerPhone: String
});
const User = mongoose.model('User', userSchema);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/ess", {useNewUrlParser: true}, function(err, client) {
	if(err) {
		console.log(err);
		process.exit(1);
	}
	console.log("\n" + Date.now() + "\nDB_CONN:SUCCESS\nHOST: 127.0.0.1\nPORT: 27017\n");
});


app.use(morgan('dev'));
app.use(cors({origin: '*', optionsSuccessStatus: 200}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(expressJwt({secret: 'f706263ff144468af269d8ec3745b2fa9f615f19e8368da99a4d7b4379fc5885'}).unless({path: [ '/users/login' ]}));

app.post('/users/login', function(request, response) {
	User.findOne({email: request.body.email}, (error, user) => {
		if(!user) {
			return response.sendStatus(401);
		}
		if(request.body.password !== user.password) {
			return response.sendStatus(401);
		}
		else {
			const token = jwt.sign({email: user.email}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
			response.send({token});
		}
	});
});

app.get('/users/all', function(request, response) {
	User.find({}, (error, docs) => {
		if(error) {
			return console.error(error);
		}
		response.status(200).json(docs);
	});
});
app.get('/users/count', function(request, response) {
	User.count((error, count) => {
		if(error) {
			return console.error(error);
		}
		response.status(200).json(count);
	});
});
app.post('/users/register', function(request, response) {
	const newUser = new User({email: request.body.email, password: request.body.password});
	newUser.save((error, item) => {
		if(error && error.code === 11000) {
			response.sendStatus(400);
		}
		if(error) {
			return console.error(error);
		}
		response.status(200).json(item);
	});
});

app.get('/users:id', function(request, response) {

	User.findOne({_id: request.params.id}, (error, item) => {
		if(error) {
			return console.error(error);
		}
		response.status(200).json(item);
	});
});
app.put('/users:id', function(request, response) {
	User.findOneAndUpdate({_id: request.params.id}, request.body, (error) => {
		if(error) {
			return console.error(error);
		}
		response.sendStatus(200);
	});
});
app.delete('/users:id', function(request, response) {
	User.findOneAndRemove({_id: request.params.id}, (error) => {
		if(error) {
			return console.error(error);
		}
		response.sendStatus(200);
	});
});
app.get('/proposals', getAll = function(request, response) {
	Proposal.find({}, (error, docs) => {
		if(error) {
			return console.error(error);
		}
		response.status(200).json(docs);
	});
});

app.get('/proposals', function(request, response) {
	Proposal.count((error, count) => {
		if(error) {
			return console.error(error);
		}
		response.status(200).json(count);
	});
});

app.post('/proposals', function(request, response) {
	const newProposal = new Proposal(request.body);
	newProposal.save((error, item) => {
		// 11000 is the code for duplicate key error
		if(error && error.code === 11000) {
			response.sendStatus(400);
		}
		if(error) {
			return console.error(error);
		}
		response.status(200).json(item);
	});
});

app.get('/proposals:id', function(request, response) {
	Proposal.findOne({_id: request.params.id}, (error, item) => {
		if(error) {
			return console.error(error);
		}
		response.status(200).json(item);
	});
});

app.put('/proposals:id', function(request, response) {
	Proposal.findOneAndUpdate({_id: request.params.id}, request.body, (error) => {
		if(error) {
			return console.error(error);
		}
		response.sendStatus(200);
	});
});

app.delete('/proposals:id', function(request, response) {
	Proposal.findOneAndRemove({_id: request.params.id}, (error) => {
		if(error) {
			return console.error(error);
		}
		response.sendStatus(200);
	});
});


const storage = multer.diskStorage({
	destination: (request, file, callback) => {
		callback(null, './uploads');
	},
	filename: (request, file, callback) => {
		callback(null, file.fieldname + '-' + Date.now() + '.' + request.body.user + path.extname(file.originalname));
	}
});

const upload = multer({storage: storage});

app.use(express.static('public'));


app.post('/upload', upload.single('file'), function(request, response) {
	response.status(200).json('Upload works');
});
app.get('/generate-pdf', (req, res) => {
	res.send(`<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/flatly/bootstrap.min.css">
</head>

<body>

<div class="row" style="margin: 3rem auto;">
<header>
<img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/ESS_Logo_Frugal_Blue_cmyk.png" width="200" alt="logo">
</header>
    <div class="col-md-8" style="margin: 2rem auto;">
        <h1>Generate PDF</h1>
        <form class="form-horizontal well" method="post" action="/pdf">
            <div class="form-group"><label class="col-md-2 control-label">request.body.filename</label>
                <div class="col-md-10">
                    <div class="input-group"><input class="form-control" type="text" name="filename" placeholder="Will this text appear as the file name?">
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
</body>
</html>`);
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

app.post('/pdf', (req, res) => {
	const doc = new PDFDocument();
	let filename = req.body.filename;
	filename = encodeURIComponent(filename) + '.pdf';
	console.log(req.body);
	res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
	res.setHeader('Content-type', 'application/pdf');
	const content = req.body.content;
	doc.y = 300;
	doc.text(content, 50, 50);
	doc.pipe(res);
	doc.end();
});


const server = app.listen(process.env.PORT || 8080, function() {
	const port = server.address().port;
	console.log(Date.now() + "\nSERVICE_START:SUCCESS\nHOST: 127.0.0.1\nPORT: " + port + "\n");
});

module.exports = {app};
