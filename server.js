const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');
const formidable = require('formidable');
const multer = require('multer');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const fileupload = require("express-fileupload");
const User = require('./models/user.js');
const Proposal = require('./models/proposal.js');
const jwt = require('jsonwebtoken');
const PDFDocument = require('pdfkit');
const merge = require('easy-pdf-merge');
let GridFsStorage = require('multer-gridfs-storage');
let gridfs = require('gridfs-stream');
const bson = require('bson');
const shortid = require('shortid');

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
gridfs.mongo = mongoose.mongo;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/ess", {useNewUrlParser: true},
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
	const gfs = gridfs(connection.db);

	const multer = require('multer');

	const storage = multer.diskStorage({
		destination: __basedir + '/uploads',
		filename: function(req, file, cb) {
			cb(null, req.body.attachment + '-' + Date.now() +
				path.extname(file.originalname));
		}
	});

	const upload = multer({storage: storage});

	app.post('/api/upload', upload.single('file'), (req, res) => {
		console.log(req.body.proposalId);
		console.log(req.body.attachment);
		res.json({'msg': 'File uploaded successfully!', 'file': req.file});
	});

	app.get('/upload', function(request, response) {
		response.send(`
<!DOCTYPE html>
<html>
<style>
div{
padding: 2rem;

}
</style>
<body>
<form action="/api/gridfs/upload" method="post">
<label>Proposal template</label>
<input type="file" name="file">
</div>


<button type="submit">Upload</button>
</form>

</body>
</html>`);
	});


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

	app.post('/api/gridfs/upload', function(req, res) {
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
				filename: filename,
			});
			try {
				fs.createReadStream(__dirname + "/uploads/" + filename).pipe(writestream);
				writestream.on('close', (file) => {
					console.log(file._id);
					res.json(file._id);
				});
			} catch(error) {
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

		let filename = request.query.filename;

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

	app.post('/api/upload', function(request, response) {
		const form = new formidable.IncomingForm();
		let readStream;

		form.on('file', function(field, file) {
			readStream = fs.createReadStream(file.path);
		});
		form.on('end', () => {
			response.json();
		});
		form.parse(request);
	});

	app.use(express.static('public'));

	const paths = {
		pdf: path.join(__dirname, '../demax-server/', 'word.pdf'),
		word: path.join(__dirname, '../demax-server/', 'DEMAX_proposal_template.docx'),
		finalProposal: path.join(__dirname, '../demax-server/', '5c07d782163c30d831454dca.pdf'),
	};
	const fileWord = fs.readFileSync(paths.word);
	const filePDF = fs.readFileSync(paths.pdf);
	app.get('/api/pdf/attachment', function(request, response, next) {
		const file = fs.createReadStream(paths.pdf);
		const stat = fs.statSync(paths.pdf);
		response.setHeader('Content-Length', stat.size);
		response.setHeader('Content-Type', 'application/pdf');
		response.setHeader('Content-Disposition', 'attachment; filename=word.pdf');
		file.pipe(response);
	});

	app.get('./api/pdf/finished', function(request, response, next) {
		const file = fs.createReadStream(paths.finalProposal);
		const stat = fs.statSync(paths.finalProposal);
		response.setHeader('Content-Length', stat.size);
		response.setHeader('Content-Type', 'application/pdf');
		response.setHeader('Content-Disposition', 'attachment; filename=5c07d782163c30d831454dca.pdf');
		file.pipe(response);
	});
	app.get('/api/word/attachment', function(request, response, next) {
		const file = fs.createReadStream(paths.word);
		const stat = fs.statSync(paths.word);
		response.setHeader('Content-Length', stat.size);
		response.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
		response.setHeader('Content-Disposition', 'attachment; filename=DEMAX_proposal_template.docx');
		file.pipe(response);
	});

	app.get('/api/generate-pdf', function(request, response) {
		response.send(`<!DOCTYPE html`);
	});
	app.post('/api/pdf', (request, response) => {
		const doc = new PDFDocument();
		let filename = request.body._id + '-merged-pdf';
		filename = encodeURIComponent(filename) + '.pdf';
		console.log(request.body);
		response.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
		response.setHeader('Content-type', 'application/pdf');
		response.setHeader('Access-Control-Allow-Origin', '*');
		doc.fontSize(25).text(request.body.experimentTitle);
		doc.save();
		doc.scale(0.6).translate(470, 130).restore();
		doc.text(request.body.briefSummary, 100, 300).font('Times-Roman', 13).moveDown().text(request.body.mainProposerFirstName, {});
		doc.y = 300;
		const content = request.body;
		doc.y = 300;
		doc.text(content, 50, 50);
		doc.pipe(response);
		doc.end();
	});

	app.get('/api/pdf/:id', async function(request, response) {
		const doc = new PDFDocument();
		try {
			let proposal = await Proposal.findOne({proposalId: request.params.id});
			let filename = proposal.proposalId + '-merged-pdf';
			filename = encodeURIComponent(filename) + '.pdf';

			response.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
			response.setHeader('Content-type', 'application/pdf');
			response.setHeader('Access-Control-Allow-Origin', '*');

			doc.info[ 'Title' ] = proposal.proposalId + '.pdf';
			doc.info[ 'Author' ] = proposal.mainProposerFirstName + ' ' + proposal.mainProposerLastName;

			const bold = './demax-client/src/assets/fonts/titillium-bold-webfont.woff';
			const regular = './demax-client/src/assets/fonts/titillium-regular-webfont.woff';
			const italic = './demax-client/src/assets/fonts/titillium-regularitalic-webfont.woff';
			const semibold = './demax-client/src/assets/fonts/titillium-semibold-webfont.woff';

			doc.font(semibold, 25).text(proposal.experimentTitle).moveDown()
			.fontSize(14).text('Brief summary: ')
			.font(regular, 12).text(proposal.briefSummary).moveDown()
			.font(semibold, 14).text('Main proposer:')
			.font(regular, 12).text(proposal.mainProposerFirstName + ' ' + proposal.mainProposerLastName)
			.text(proposal.mainProposerAffiliation)
			.text(proposal.mainProposerEmail)
			.text(proposal.mainProposerPhone).moveDown()
			.font(semibold, 14).text('Co-proposers:')
			.font(semibold, 14).text('Need-by-date: ')
			.font(regular, 12).text(proposal.needByDate)
			.font(regular, 12).text('Motivation: ' + proposal.needByDateMotivation).moveDown();
			if(proposal.wantsCrystallization){
				doc.addPage()
				.font(semibold, 18).text('(A) CRYSTALLIZATION').moveDown()
				.font(italic, 12).text('Required information to include in “Practical Considerations” section of your proposal: SDS-PAGE and chromatogram of protein purification to indicate yield & purity; photo of crystal.').moveDown()
				.font(semibold, 14).text('Name of molecule to be crystallized (e.g. superoxide dismutase): ')
				.font(regular, 12).text(proposal.crystallization.moleculeName).font(semibold, 14)
				.text('FASTA sequence or Uniprot number: ').font(regular, 12)
				.text(proposal.crystallization.moleculeIdentifier).font(semibold, 14)
				.text('Molecular weight (kDA): ').font(regular, 12)
				.text(proposal.crystallization.molecularWeight)
				.font(semibold, 14).text('PDB ID of crystal structure: ')
				.font(regular, 12).text(proposal.crystallization.pbdId)
				.font(semibold, 14).text('DOI: ')
				.font(regular, 12).text(proposal.crystallization.doi).moveDown()
				.font(semibold, 14).text('Does the protein have any co-factors or ligands required for crystallization? Specify: ')
				.font(regular, 12).text(proposal.crystallization.crystallizationRequirements).moveDown()
				.font(semibold, 14).text('Known crystallization precipitant composition (incl. buffer, salt, additives, pH): ')
				.font(regular, 12).text(proposal.crystallization.crystallizationPrecipitantComposition).moveDown()
				.font(semibold, 14).text('What crystallization method, volume, and temperature have you used in the past? (e.g. vapour diffusion, 10 L drops, room temperature): ')
				.font(regular, 12).text(proposal.crystallization.previousCrystallizationExperience).moveDown()
				.font(semibold, 14).text('How long do your crystals take to appear?: ')
				.font(regular, 12).text(proposal.crystallization.estimatedCrystallizationProductionTime).moveDown()
				.font(semibold, 14).text('What is the typical size of your crystal (μm x μm x μm): ')
				.font(regular, 12).text(proposal.crystallization.typicalCrystalSize).moveDown()

				.font(semibold, 16).text('Details from protein preparation')
				.font(semibold, 14).text('Typical yield (mg per liter of culture):')
				.font(regular, 12).text(proposal.crystallization.typicalYieldMgPerLiter).moveDown()
				.font(semibold, 14).text('Storage conditions (e.g. stable at 4 C or frozen at -20 C):')
				.font(regular, 12).text(proposal.crystallization.typicalYieldMgPerLiter).moveDown()
				.font(semibold, 14).text('Stability:')
				.font(regular, 12).text(proposal.crystallization.stability).moveDown()
				.font(semibold, 14).text('What buffer is your protein in?:')
				.font(regular, 12).text(proposal.crystallization.buffer).moveDown()
				.font(semibold, 14).text('Is your protein partially or fully deuterated?:')
				.font(regular, 12).text(proposal.crystallization.levelOfDeuteration).moveDown()
				.font(semibold, 14).text('What protein concentration do you usually use for crystallization: ')
				.font(regular, 12).text(proposal.crystallization.typicalProteinConcentrationUsed).moveDown();
			}
			if(proposal.wantsBiomassDeuteration){
				doc.addPage()
				.font(semibold, 18).text('(B) BIOLOGICAL DEUTERATION').moveDown()

				.font(semibold, 14).text('Will user provide the organism for us to grow under deuterated conditions?').moveDown()
				.font(regular, 12).text('').moveDown()
				.font(semibold, 14).text('What is the organism?').moveDown()
				.font(regular, 12).text(proposal.biomassDeuteration.organismDetails).moveDown()
				.font(semibold, 14).text('Please attach a reference or protocol of culture conditions and media composition').moveDown()
				.font(regular, 12).text(proposal.biomassDeuteration.organismReferenceAttachment)
				.font(semibold, 14).text('How much material do you need (indicate wet or dry mass)').moveDown()
				.font(regular, 12).text(proposal.biomassDeuteration.amountNeeded).moveDown()
				.font(semibold, 14).text('Justify amount').moveDown()
				.font(regular, 12).text(proposal.biomassDeuteration.amountNeededMotivation).moveDown()
				.font(semibold, 14).text('Level of deuteration required:').moveDown()
				.font(regular, 12).text(proposal.biomassDeuteration.deuterationLevelRequired).moveDown()
				.font(semibold, 14).text('Justify level of D incorporation').moveDown()
				.font(regular, 12).text(proposal.biomassDeuteration.deuterationLevelMotivation).moveDown()
			}
			if(proposal.wantsProteinDeuteration){

			}
			if(proposal.wantsProteinDeuteration || proposal.wantsBiomassDeuteration){
				doc.addPage()
				.font(semibold, 18).text('Biosafety').moveDown()
				.font(semibold, 14).text('1) Which biosafety containment level is required to work with your sample?').moveDown()
				.font(regular, 12).text(proposal.bioSafety.bioSafetyContainmentLevel).moveDown()
				.font(semibold, 14).text('Is your organism a live virus, toxin-producing, or pose ay risk to human health and/or the environment?')
				.font(regular, 12).text(proposal.bioSafety.organismRisk).moveDown()
				.font(semibold, 14).text('If you chose “yes”, please provide details:')
				.font(regular, 12).text(proposal.bioSafety.organismRiskDetails).moveDown()
			}
			if(proposal.wantsChemicalDeuteration){
				doc.addPage()
				.font(semibold, 18).text('(C) CHEMICAL DEUTERATION').moveDown()
				.font(semibold, 14).text('Molecule/s to be deuterated (name):').moveDown()
				.font(regular, 12).text(proposal.chemicalDeuteration.moleculeName).moveDown()
				.font(semibold, 14).text('Amount of material required (mass):').moveDown()
				.font(regular, 12).text(proposal.chemicalDeuteration.amount).moveDown()
				.font(semibold, 14).text('Justify amount:').moveDown()
				.font(regular, 12).text(proposal.chemicalDeuteration.amountMotivation).moveDown()
				.font(semibold, 14).text('Indicate percentage and location of deuteration:').moveDown()
				.font(regular, 12).text(proposal.chemicalDeuteration.deuterationLocationAndPercentege).moveDown()
				.font(semibold, 14).text('Justify level of deuteration:').moveDown()
				.font(regular, 12).text(proposal.chemicalDeuteration.deuterationLevelMotivation).moveDown()
				.font(semibold, 14).text('Has this molecule (or an unlabeled/isotopic analogue) been prepared by yourself or others?').moveDown()
				.font(regular, 12).text(proposal.chemicalDeuteration.hasPreparedMolecule).moveDown()
			}
			doc.save();
			fs.createWriteStream(filename);
			doc.pipe(response);
			doc.end();

		} catch(error) {
			console.log(error);
		}
	});

	app.get('/api/pdf/merge/:id', async function(request, response) {
		try {
			let proposal = await Proposal.findOne({proposalId: request.params.id});
			merge([ proposal.proposalTemplate,
					proposal.generatedProposal,
					proposal.needByDateAttachment,
					proposal.pbdIdReferenceAttachment,
					proposal.organismReferenceAttachment,
					proposal.needsPurificationSupportAttachment,
				], './merged/' + proposal.proposalId + '.pdf',
				function(error) {
					if(error) {
						console.log(error);
						return error;
					}
				});
		}
		catch(error) {console.log(error);}

	});

	app.post('/api/users/login', function(request, response) {
		console.log(request.body.email);
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
});