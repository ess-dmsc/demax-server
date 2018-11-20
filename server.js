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
const merge = require('easy-pdf-merge');

const userSchema = new mongoose.Schema({
	email: {type: String, unique: true, lowercase: true, trim: true},
	password: String,
	firstName: String,
	lastName: String,
	phone: String,
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

app.post('/users/login', function(request, response) {
	User.findOne({email: request.body.email}, (err, user) => {
		if(!user) { return response.sendStatus(403); }
		user.comparePassword(request.body.password, (error, isMatch) => {
			if(!isMatch) { return response.sendStatus(403); }
			const token = jwt.sign({user: user}, {expiresIn: 10}, process.env.SECRET_TOKEN);
			response.status(200).json({token: token});
		});
	});
});

app.get('/users/all', async function(request, response) {
	try {
		const docs = await User.find({});
		response.status(200).json(docs);
	} catch(err) {
		return response.status(400).json({error: err.message});
	}
});
app.get('/users/count', async function(request, response) {
	try {
		const count = await User.count();
		response.status(200).json(count);
	} catch(err) {
		return response.status(400).json({error: err.message});
	}
});
app.post('/users/register', async function(request, response) {
	try {
		const obj = await new User(request.body).save();
		response.status(201).json(obj);
	} catch(err) {
		return response.status(400).json({error: err.message});
	}
});

app.get('/users:id', async function(request, response) {
	try {
		const obj = await User.findOne({_id: request.params.id});
		response.status(200).json(obj);
	} catch(err) {
		return response.status(500).json({error: err.message});
	}
});
app.put('/users:id', async function(request, response) {
	try {
		await User.findOneAndUpdate({_id: request.params.id}, request.body);
		response.sendStatus(200);
	} catch(err) {
		return response.status(400).json({error: err.message});
	}

});
app.delete('/users/:id', async function(request, response) {
	try {
		await User.findOneAndRemove({_id: request.params.id});
		response.sendStatus(200);
	} catch(err) {
		return response.status(400).json({error: err.message});
	}
});

app.get('/proposals', async function(request, response) {
	try {
		const docs = await Proposal.find({});
		response.status(200).json(docs);
	} catch(err) {
		return response.status(400).json({error: err.message});
	}
});
app.get('/proposals/count', async function(request, response) {
	try {
		const count = await Proposal.count();
		response.status(200).json(count);
	} catch(err) {
		return response.status(400).json({error: err.message});
	}
});
app.post('/proposals', async function(request, response) {
	try {
		const obj = await new Proposal(request.body).save();
		response.status(201).json(obj);
	} catch(err) {
		return response.status(400).json({error: err.message});
	}
});

app.get('/proposals/:id', async function(request, response) {
	try {
		const obj = await Proposal.findOne({_id: request.params.id});
		response.status(200).json(obj);
	} catch(err) {
		return response.status(500).json({error: err.message});
	}
});
app.put('/proposals/:id', async function(request, response) {
	try {
		await Proposal.findOneAndUpdate({_id: request.params.id}, request.body);
		response.sendStatus(200);
	} catch(err) {
		return response.status(400).json({error: err.message});
	}

});
app.delete('/proposals/:id', async function(request, response) {
	try {
		await Proposal.findOneAndRemove({_id: request.params.id});
		response.sendStatus(200);
	} catch(err) {
		return response.status(400).json({error: err.message});
	}
});

const storage = multer.diskStorage({
	destination: (request, file, callback) => {
		callback(null, './uploads');
	},
	filename: (request, file, callback) => {
		callback(null, Date.now() + '.' + request.body.user + path.extname(file.originalname));
	}
});

const upload = multer({storage: storage});

app.use(express.static('public/browser'));


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
        <h1>Merge multiple PDF's</h1>
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

/*
 const ImageSchema = mongoose.Schema({
 type: String,
 data: Buffer
 });

 const image = new Image({
 type: 'image/png',
 data: imageData
 });

 image.save()
 .then(img => {
 Image.findById(img, (err, findOutImage) => {
 if (err) throw err;
 try{
 fs.writeFileSync('/path/to/file', findOutImage.data);
 }catch(e){
 console.log(e);
 }
 });
 });
 */

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
	doc.fontSize(25).text(req.body.filename, 100, 80);
	doc.save();

	doc.circle(280, 200, 50).fill("#0094CA");
	doc.scale(0.6).translate(470, 130).restore();

	doc.text('This is the file name: ' + req.body.filename, 100, 300).font('Times-Roman', 13).moveDown().text(req.body.content, {
		width: 412,
		align: 'justify',
		indent: 30,
		columns: 2,
		height: 300,
		ellipsis: true
	});
	doc.y = 300;
	const content = req.body.content;
	doc.y = 300;
	doc.text(content, 50, 50);
	doc.pipe(res);
	doc.end();
});

app.get('/pdf/merge', (req, res) => {
	merge([ './uploads/file-1542185972868..pdf', './uploads/file-1542205573137..pdf' ],
		'./merges/merged-pdf.pdf', function(err) {

			if(err)
				return console.log(err);

			console.log('Success');

		});
	res.send('Success');

});

const server = app.listen(process.env.PORT || 8080, function() {
	const port = server.address().port;
	console.log(Date.now() + "\nSERVICE_START:SUCCESS\nHOST: 127.0.0.1\nPORT: " + port + "\n");
});

module.exports = {app};
