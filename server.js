const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');
const IncomingForm = require('formidable').IncomingForm;
const multer = require('multer');
const mongodb = require("mongodb");
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", {useNewUrlParser: true}, function(err, client) {
	if(err) {
		console.log(err);
		process.exit(1);
	}
	console.log("\n" + Date.now() + "\nDB_CONN:SUCCESS\nHOST: 127.0.0.1\nPORT: 27017\n");
});


const app = express();

app.use(morgan('dev'));
app.use(cors({origin: '*', optionsSuccessStatus: 200}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());
app.use(session({
	secret: "sshh",
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

const Proposal = mongoose.model('Proposal', {
	experiment_title: String,
	brief_summary: {type: String, unique: true, lowercase: true, trim: true},
	main_Proposer: {type: mongoose.Schema.Types.ObjectId, ref: User, required: true},
	co_proposers: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
			}
		}
	],
	need_by_date: {
		motivation: String,
		attachment: String
	},
	resources: {
		lab: String,
		instrument: String,
		service: String
	},
	date_created: {type: Date, default: Date.now()},
	deuteration_methods: [
		{
			crystallization: {
				molecule_name: String,
				molecule_identifier: String,
				oligomerization_state: String,
				crystalStructure_reference_PDF: {
					proposal_attachment: {
						type: mongoose.Schema.Types.ObjectId,
						ref: 'ProposalAttachment'
					}
				},
				crystallization_requirements: String,
				crystallization_precipitant_composition: String,
				previous_crystallization_experience: String,
				estimated_crystallization_productionTime: String,
				typical_crystalSize: String,
				typical_yield_mg_per_liter: String,
				storage_conditions: String,
				stability: String,
				buffer: String,
				level_of_deuteration: String,
				typical_protein_concentration_used: String
			},
			biologic: {
				biomass: {
					organism_provided_by_user: String,
					organism_details: String,
					organism_reference_PDF: {
						proposal_attachment: {
							type: mongoose.Schema.Types.ObjectId,
							ref: 'ProposalAttachment'
						}
					},
					amount_needed: String,
					state_of_material: String,
					amount_of_material_motivation: String,
					deuteration_level_required: String,
					deuteration_level_motivation: String,
				},
				protein: {
					molecule_name: String,
					molecule_identifier: String,
					weight: String,
					oligomerization_state: String,
					expression_requirements: String,
					molecule_origin: String,
					expression_plasmid_provided_by_user: String,
					details: String,
					amount_needed: String,
					amount_needed_motivation: String,
					deuteration_level_required: String,
					deuteration_level_motivation: String,
					needs_purification_support: String,
					purification_experience_reference_PDF: {
						proposal_attachment: {
							type: mongoose.Schema.Types.ObjectId,
							ref: 'ProposalAttachment'
						}
					},
					has_done_unlabeled_protein_expression: String,
					has_protein_purification_experience: String,
					protein_purification_experience_reference_PDF: {
						proposal_attachment: {
							type: mongoose.Schema.Types.ObjectId,
							ref: 'ProposalAttachment'
						}
					},

				},
			},
			chemical: {
				molecule_name: String,
				amount: String,
				amount_motivation: String,
				deuteration_location_and_percentege: String,
				deuteration_level_motivation: String,
				chemical_structure: {
					proposal_attachment: {
						type: mongoose.Schema.Types.ObjectId,
						ref: 'ProposalAttachment'
					}
				},
				has_previous_production_experience: {
					proposal_attachment: {
						type: mongoose.Schema.Types.ObjectId,
						ref: 'ProposalAttachment'
					}
				},
			}

		}
	]
});

/* app.get('/', function(request, response){
 response.sendFile('index.html');
 }) */

app.get('/proposals', function(request, response) {
	Proposal.find({ })
		.then((documents) => {
			response.json(documents);
		})
});

app.post('/proposals', function (request, response) {
	const newProposal = new Proposal({ title: request.body.title, completed: false});
	newProposal.save()
		.then(document => {
			response.json(document);
		})
});

app.get('/proposals/:id', function (request, response) {
	const proposalId = request.params.id.toString();
	Proposal.find({ experiment_title: proposalId })
	.then((document) => {
		response.json(document);
	})
});

app.delete('/proposals/:id', function (request, response) {

	const proposalId = request.params.id.toString();
	Proposal.findOneAndDelete({ experiment_title: proposalId })
	.then((document) => {
		response.json(document);
	})
});

app.patch('/proposals/:id', function (request, response) {
	const proposalId = request.params.id.toString();
	const query = { experiment_title: proposalId };
	Proposal.findOneAndUpdate(query, { title: request.body.title })
	.then((document) => {
		response.json(document);
	})
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

const server = app.listen(process.env.PORT || 8080, function() {
	const port = server.address().port;
	console.log(Date.now() + "\nSERVICE_START:SUCCESS\nHOST: 127.0.0.1\nPORT: " + port + "\n");
});

module.exports = {app};