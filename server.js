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
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passportLocalMongoose = require('passport-local-mongoose');
const proposal = require('./routes/proposal.routes.js');
const app = express();

app.use('/proposals', proposal);

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

app.use(cookieParser());
app.use(session({
	secret: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNaf706263ff144468af269d8ec3745b2fa9f615f19e8368da99a4d7b4379fc5885",
	resave: true,
	saveUninitialized: false
}));

const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	firstname: String,
	lastname:  String,
	phone:  String,
	email:  String,
	role:  String,
	employerSector:  String,
	employerName:  String,
	employerStreet:  String,
	employerZipcode:  String,
	employerCity:  String,
	employerCountry:  String,
	employerPhone:  String
});

UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', UserSchema);

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

function isLoggedIn(request, response, next){
	if (request.isAuthenticated()) {
		return next(); //next() means -> continue and forward request
	}
	response.json('Unauthorized');
}

app.post('/login', passport.authenticate('local'), (request, response) => {
	response.json(request.user.username);
});


app.post('/register', (request, response) => {
	User.register(new User({ username: request.body.username }), request.body.password, (err, user) => {
		if (err) {
			response.json(err);
		}
		passport.authenticate('local')(request, response, () => {
			response.json('User registered');
		});
	});
});

const storage = multer.diskStorage({
	destination: (request, file, callback) => {
		callback(null, './uploads');
	},
	filename: (request, file, callback) => {
		callback(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
	}
});

const upload = multer({storage: storage});

app.use(express.static('public'));


/* app.get('/', function(request, response){
 response.sendFile('index.html');
 }) */

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

const server = app.listen(process.env.PORT || 8080, function() {
	const port = server.address().port;
	console.log(Date.now() + "\nSERVICE_START:SUCCESS\nHOST: 127.0.0.1\nPORT: " + port + "\n");
});

module.exports = {app};