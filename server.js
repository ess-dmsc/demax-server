const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');
const nanoid = require('nanoid/generate');
const formidable = require('formidable');
const multer = require('multer');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user.js');
const Proposal = require('./models/proposal.js');
const jwt = require('jsonwebtoken');
const PDFDocument = require('pdfkit');
const merge = require('easy-pdf-merge');
const uploadFolder = '../files/uploads/';
const bold = './fonts/titillium-bold-webfont.woff';
const regular = './fonts/titillium-regular-webfont.woff';
const italic = './fonts/titillium-regularitalic-webfont.woff';
const semibold = './fonts/titillium-semibold-webfont.woff';
const app = express();

app.use(morgan('dev'));
app.use(cors({origin: '*', optionsSuccessStatus: 200}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
global.__basedir = __dirname;
app.get('/test', function(req, res) {res.sendfile('./public/test.html');});

mongoose.Promise = global.Promise;
const connection = mongoose.connection;

//mongoose.connect("mongodb://mongodb/ess", {useNewUrlParser: true},
mongoose.connect("mongodb://localhost:27017/ess", {useNewUrlParser: true},
	function(error, client) {
		if(error) {
			console.log(error);
			process.exit(1);
		}
		console.log("Connected to database");
	});

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
	console.log('successful db connection');

	const multer = require('multer');

	const storage = multer.diskStorage({
		destination: (request, file, callback) => {callback(null, './files/uploads/');},
		filename: (request, file, callback) => {callback(null, file.originalname);}
	});

	const upload = multer({storage: storage});

	app.post('/api/file/upload/:attachment', upload.single("file"), async function(request, response) {

		try {
			await Proposal.update({proposalId: request.body.proposalId}, {"$push": {attachments: `"./${request.file.path}"`}});
			console.log(proposal.attachments);
		} catch(error) {
			console.log(error);
		}
		response.send('File uploaded successfully! -> Filename = ' + request.file.filename);
	});

	app.get('/api/file/all', (request, response) => {
		fs.readdir(__basedir + '/files/uploads/', (err, files) => {
			for(let i = 0; i < files.length; ++i) {
				files[ i ] = files[ i ];
			}
			response.send(files);
		});
	});

	app.get('/api/file/:filename', (request, response) => {
		let filename = request.params.filename;
		response.download(__basedir + '/files/uploads/' + filename);
	});

	app.delete('/api/file/:filename', (request, response) => {
		let filename = request.params.filename;
		fs.unlink(__basedir + '/files/uploads/' + filename, function(error) {
			if(error) {
				console.log(error);
			}
			response.send(filename + ' deleted');
		});
	});

	app.use(express.static('../public'));

	const paths = {word: path.join(__dirname, './files/resources/', 'DEMAX_proposal_template.docx')};

	app.get('/', async function(request, response) {
		try {response.sendFile('./files/resources/home.html', {root: __dirname});}
		catch(error) {response.send('Error');}
	});

	app.get('/api', async function(request, response) {
		try {
			response.sendFile('./files/resources/api.html', {root: __dirname});
		} catch(error) {
			response.send(error);
		}
	});

	app.get('/word/attachment', function(req, res, next) {
		const file = fs.createReadStream(paths.word);
		const stat = fs.statSync(paths.word);
		res.setHeader('Content-Length', stat.size);
		res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
		res.setHeader('Content-Disposition', 'attachment; filename=DEMAX_proposal_template.docx');
		file.pipe(res);
	});

	app.get('/api/pdf/:id', async function(request, response) {
		const doc = new PDFDocument();
		try {
			let proposal = await Proposal.findOne({proposalId: request.params.id});
			let filename = proposal.proposalId + '';
			filename = encodeURIComponent(filename) + '.pdf';

			response.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
			response.setHeader('Content-type', 'application/pdf');
			response.setHeader('Access-Control-Allow-Origin', '*');

			doc.info[ 'Title' ] = proposal.proposalId + '.pdf';
			doc.info[ 'Author' ] = proposal.mainProposerFirstName + ' ' + proposal.mainProposerLastName;

			doc.font(semibold, 25).text(proposal.experimentTitle).moveDown().fontSize(14).text('Brief summary: ').font(regular, 12).text(proposal.briefSummary).moveDown().font(semibold, 14).text('Main proposer:').font(regular, 12).text(proposal.mainProposer.firstName + ' ' + proposal.mainProposer.lastName).text(proposal.mainProposer.employer).text(proposal.mainProposer.title).moveDown().text(proposal.mainProposer.email).text(proposal.mainProposer.phone).moveDown().font(semibold, 14).text('Co-proposers:').moveDown().font(semibold, 14).text('Links with industry:').font(regular, 12).text(proposal.linksWithIndustry).moveDown().font(semibold, 14).text('Are any of the co-proposers students?').font(regular, 12).text(proposal.coProposerStudents).moveDown().font(semibold, 14).text('Does the proposal work towards a students degree?').font(regular, 12).text(proposal.workTowardsStudentsDegree).moveDown().font(semibold, 14).text('Need-by-date: ').font(regular, 12).text(proposal.needByDate).moveDown().font(semibold, 14).text('Motivation: ').font(regular, 12).text(proposal.needByDateMotivation);

			if(proposal.wantsCrystallization) {
				doc.addPage().font(semibold, 18).text('(A) CRYSTALLIZATION').moveDown().font(italic, 12).text('Required information to include in “Practical Considerations” section of your proposal: SDS-PAGE and chromatogram of protein purification to indicate yield & purity; photo of crystal.').moveDown().font(semibold, 13).text('Name of molecule to be crystallized (e.g. superoxide dismutase): ').font(regular, 12).text(proposal.crystallization.moleculeName).moveDown().font(semibold, 13).text('FASTA sequence or Uniprot number: ').font(regular, 12).text(proposal.crystallization.moleculeIdentifier).moveDown().font(semibold, 13).text('Molecular weight (kDA): ').font(regular, 12).text(proposal.crystallization.molecularWeight).moveDown().font(semibold, 13).text('PDB ID of crystal structure: ').font(regular, 12).text(proposal.crystallization.pbdId).moveDown().font(semibold, 13).text('DOI: ').font(regular, 12).text(proposal.crystallization.doi).moveDown().font(semibold, 13).text('Does the protein have any co-factors or ligands required for crystallization? Specify: ').font(regular, 12).text(proposal.crystallization.crystallizationRequirements).moveDown().font(semibold, 13).text('Known crystallization precipitant composition (incl. buffer, salt, additives, pH): ').font(regular, 12).text(proposal.crystallization.crystallizationPrecipitantComposition).moveDown().font(semibold, 13).text('What crystallization method, volume, and temperature have you used in the past?').font('Times-Roman').text('(e.g. vapour diffusion, 10µL drops, room temperature)').font(regular, 12).text(proposal.crystallization.previousCrystallizationExperience).moveDown().font(semibold, 13).text('How long do your crystals take to appear?: ').font(regular, 12).text(proposal.crystallization.estimatedCrystallizationProductionTime).moveDown().font(semibold, 13).text('What is the typical size of your crystal?').font('Times-Roman').text('(µm x µm x µm): ').font(regular, 12).text(proposal.crystallization.typicalCrystalSize).moveDown().font(semibold, 16);
				doc.addPage().text('Details from protein preparation').moveDown().font(semibold, 13).text('Typical yield (mg per liter of culture):').font(regular, 12).text(proposal.crystallization.typicalYieldMgPerLiter).moveDown().font(semibold, 13).text('Storage conditions (e.g. stable at 4 °C or frozen at -20 °C):').font(regular, 12).text(proposal.crystallization.storageConditions).moveDown().font(semibold, 13).text('Stability:').font(regular, 12).text(proposal.crystallization.stability).moveDown().font(semibold, 13).text('What buffer is your protein in?:').font(regular, 12).text(proposal.crystallization.buffer).moveDown().font(semibold, 13).text('Is your protein partially or fully deuterated?:').font(regular, 12).text(proposal.crystallization.levelOfDeuteration).moveDown().font(semibold, 13).text('What protein concentration do you usually use for crystallization: ').font(regular, 12).text(proposal.crystallization.typicalProteinConcentrationUsed).moveDown().font(semibold, 13).text('Other:').font(regular, 12).text(proposal.crystallization.other);
			}
			if(proposal.wantsBiomassDeuteration) {
				doc.addPage().font(semibold, 18).text('(B) BIOLOGICAL DEUTERATION').moveDown().font(italic, 12).text('If the protein is to be purified by us, please remember to include a chromatogram from purification and a picture of SDS-PAGE that indicates MW and purity in your science case.').moveDown().font(semibold, 16).text('For biomass').moveDown().font(semibold, 13).text('Will user provide the organism for us to grow under deuterated conditions?').font(regular, 12).text(proposal.biomassDeuteration.organismProvidedByUser).moveDown().font(semibold, 13).text('What is the organism?').font(regular, 12).text(proposal.biomassDeuteration.organismDetails).moveDown().font(regular, 12).text(proposal.biomassDeuteration.organismReferenceAttachment).moveDown().font(semibold, 13).text('How much material do you need (indicate wet or dry mass)').font(regular, 12).text(proposal.biomassDeuteration.amountNeeded).moveDown().font(semibold, 13).text('Justify amount').font(regular, 12).text(proposal.biomassDeuteration.amountNeededMotivation).moveDown().font(semibold, 13).text('Level of deuteration required:').font(regular, 12).text(proposal.biomassDeuteration.deuterationLevelRequired).moveDown().font(semibold, 13).text('Justify level of D incorporation').font(regular, 12).text(proposal.biomassDeuteration.deuterationLevelMotivation).moveDown().font(semibold, 13).text('Other:').font(regular, 12).text(proposal.biomassDeuteration.other);
			}
			if(proposal.wantsProteinDeuteration) {
				doc.addPage().font(semibold, 16).text('For proteins').moveDown().font(semibold, 13).text('Name of molecule to be deuterated (e.g. superoxide dismutase):').font(regular, 12).text(proposal.proteinDeuteration.moleculeName).moveDown().font(semibold, 13).text('FASTA sequence or Uniprot number:').font(regular, 12).text(proposal.proteinDeuteration.moleculeIdentifier).moveDown().font(semibold, 13).text('Oligomerizarion state? (e.g. homodimer, tetramer etc.):').font(regular, 12).text(proposal.proteinDeuteration.oligomerizationState).moveDown().font(semibold, 13).text('Does the protein have any co-factors or ligands required for expression? Specify: ').font(regular, 12).text(proposal.proteinDeuteration.expressionRequirements).font(semibold, 13).text('Origin of molecules (e.g. human, E. coli, S. cerevisiae):').font(regular, 12).text(proposal.proteinDeuteration.moleculeOrigin).moveDown().font(semibold, 13).text('Will you provide an expression plasmid?').font(regular, 12).text(proposal.proteinDeuteration.expressionPlasmidProvidedByUser).moveDown().font(semibold, 13).text('If “yes”, please provide details (e.g. pET31b, C-terminal His-tag, Amp selection) If “no”, we will design & order a plasmid commercially)').font(regular, 12).text(proposal.proteinDeuteration.expressionPlasmidProvidedByUserDetails).moveDown().font(semibold, 13).text('How much material do you need: ').font(regular, 12).text(proposal.proteinDeuteration.amountNeeded).moveDown().font(semibold, 13).text('Justify amount:').font(regular, 12).text(proposal.proteinDeuteration.amountNeededMotivation).moveDown().font(semibold, 13).text('Will you need DEMAX to purify the protein from deuterated biomass?').font(regular, 12).text(proposal.proteinDeuteration.needsPurificationSupport).moveDown().font(semibold, 13).text('Has expression been done for the unlabeled protein?').font(regular, 12).text(proposal.proteinDeuteration.hasDoneUnlabeledProteinExpression).moveDown().font(semibold, 13).text('Typical yield:').font(regular, 12).text(proposal.proteinDeuteration.typicalYield).moveDown().font(semibold, 13).text('Have you been able to purify the unlabeled protein?').font(italic, 12).text('Please include chromatogram & image of SDS-PAGE in proposal.').font(regular, 12).text(proposal.proteinDeuteration.hasPurifiedUnlabeledProtein).moveDown().font(semibold, 13).text('Have you tried to deuterate the protein yourself, even in small scale?').font(regular, 12).text(proposal.proteinDeuteration.hasProteinDeuterationExperience).moveDown().font(semibold, 13).text('Results?:').font(regular, 12).text(proposal.proteinDeuteration.proteinDeuterationResults).moveDown().font(semibold, 13).text('Other:').font(regular, 12).text(proposal.proteinDeuteration.other);
			}
			if(proposal.biomassDeuteration || proposal.wantsProteinDeuteration) {
				doc.addPage().font(semibold, 18).text('Biosafety').moveDown().font(semibold, 13).text('1) Which biosafety containment level is required to work with your sample?').font(regular, 12).text(proposal.bioSafety.bioSafetyContainmentLevel).moveDown().font(semibold, 13).text('Is your organism a live virus, toxin-producing, or pose ay risk to human health and/or the environment?').font(regular, 12).text(proposal.bioSafety.organismRisk).moveDown().font(semibold, 13).text('If you chose “yes”, please provide details:').font(regular, 12).text(proposal.bioSafety.organismRiskDetails).moveDown();
			}
			if(proposal.wantsChemicalDeuteration) {
				doc.addPage().font(semibold, 18).text('(C) CHEMICAL DEUTERATION').moveDown().font(semibold, 13).text('Molecule/s to be deuterated (name):').font(regular, 12).text(proposal.chemicalDeuteration.moleculeName).moveDown().font(semibold, 13).text('Amount of material required (mass):').font(regular, 12).text(proposal.chemicalDeuteration.amount).moveDown().font(semibold, 13).text('Justify amount:').font(regular, 12).text(proposal.chemicalDeuteration.amountMotivation).moveDown().font(semibold, 13).text('Indicate percentage and location of deuteration:').font(regular, 12).text(proposal.chemicalDeuteration.deuterationLocationAndPercentege).moveDown().font(semibold, 13).text('Justify level of deuteration:').font(regular, 12).text(proposal.chemicalDeuteration.deuterationLevelMotivation).moveDown().font(semibold, 13).text('Has this molecule (or an unlabeled/isotopic analogue) been prepared by yourself or others?').font(regular, 12).text(proposal.chemicalDeuteration.hasPreparedMolecule).moveDown();
			}
			doc.save();
			doc.pipe(fs.createWriteStream('./files/generated/' + proposal.proposalId + '_generatedProposal.pdf'));
			let generatedDoc = doc.pipe(fs.createWriteStream('./files/generated/' + proposal.proposalId + '.pdf'));

			await Proposal.findOneAndUpdate({
				proposalId: request.body.proposalId,
				generatedProposal: `"${generatedDoc.path}"`
			});

			doc.end();
			doc.pipe(response);
		}
		catch(error) {
			console.log(error);
		}
	});

	app.get('/api/pdf/merge/:proposalId', async function(request, response) {
		try {
			let proposal = await Proposal.findOne({proposalId: request.params.proposalId});

			merge([ "./files/resources/proposalTemplate.pdf",
					`"./files/generated/${proposal.proposalId}.pdf"`,
					"./files/resources/needByDateAttachment.pdf",
					"./files/resources/organismReferenceAttachment.pdf" ], `"./files/merged/${proposal.proposalId}.pdf"`,
				function(error) {
					if(error) {
						console.log(error);
						return error;
					}
					const file = fs.createReadStream("./files/merged/" + proposal.proposalId + '.pdf');
					const stat = fs.statSync("./files/merged/" + proposal.proposalId + '.pdf');
					response.setHeader('Content-Length', stat.size);
					response.setHeader('Content-Type', 'application/pdf');
					response.setHeader('Content-Disposition', 'attachment; filename=' + proposal.proposalId + '.pdf');
					file.pipe(response);
				});
			await proposal.update({mergedProposal: `"./files/merged/${proposal.proposalId}.pdf"`});
		} catch(error) {
			console.log(error);
		}
	});

	app.post('/api/users/login', function(request, response) {
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

	app.get('/api/users/all', async function(request, response) {
		try {
			const docs = await User.find({});
			response.status(200).json(docs);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}
	});
	app.get('/api/users/count', async function(request, response) {
		try {
			const count = await User.countDocuments();
			response.status(200).json(count);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}
	});

	app.post('/api/users/register', async function(request, response) {
		try {
			const obj = await new User(request.body).save();
			response.status(201).json(obj);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}
	});

	app.post('/api/users', async function(request, response) {
		try {
			const obj = await new User(request.body).save();
			response.status(201).json(obj);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}
	});


	app.get('/api/users/:id', async function(request, response) {
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
	app.put('/api/users/:id', async function(request, response) {
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
	app.delete('/api/users/:id', async function(request, response) {
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

	app.get('/api/proposals', async function(request, response) {
		try {
			const docs = await Proposal.find({});
			response.status(200).json(docs);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}
	});

	app.get('/api/proposals/count', async function(request, response) {
		try {
			const count = await Proposal.countDocuments();
			response.status(200).json(count);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}
	});
	app.post('/api/proposals', async function(request, response) {
		try {
			const obj = await new Proposal(request.body).save();
			await obj.update({proposalId: nanoid('23456789ABCDEFGHJKLMNPQRSTUVXYZ', 8)});
			response.status(201).json(obj);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}
	});

	app.get('/api/proposals/:id', async function(request, response) {
		try {
			const obj = await Proposal.findOne({
				proposalId: request.params.id
			});
			response.status(200).json(obj);
		} catch(error) {
			return response.status(500).json({
				error: error.message
			});
		}
	});

	app.put('/api/proposals/:id', async function(request, response) {
		try {
			await Proposal.findOneAndUpdate({
				proposalId: request.params.id
			}, request.body);
			response.sendStatus(200);
		} catch(error) {
			return response.status(400).json({
				error: error.message
			});
		}

	});
	app.delete('/api/proposals/:id', async function(request, response) {
		try {
			await Proposal.findOneAndDelete({
				proposalId: request.params.id
			});
			response.sendStatus(200);
		} catch(err) {
			return response.status(400).json({
				error: err.message
			});
		}
	});

	const server = app.listen(process.env.PORT || 8080, function() {
		const port = server.address().port;
		console.log(Date.now() + "\nSERVICE_START:SUCCESS\nHOST: 127.0.0.1\nPORT: " + port + "\n");
	});
})
;
