const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

const api = require('./api.js');

app.use(morgan('dev'));
app.use(cors({origin: '*', optionsSuccessStatus: 200}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
global.__basedir = __dirname;

app.use('/api', api);

mongoose.Promise = global.Promise;
const connection = mongoose.connection;
console.log(process.env.NODE_ENV)

const {db: {host, port, name}} = config;
const connectionString = `mongodb://${host}:${port}/${name}`;

console.log(config)
console.log(connectionString)
mongoose.connect(connectionString, { useNewUrlParser: true });

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function(error) {
	console.log('DATABASE CONNECTION SUCCESS' + "\n" + "CONNECTED TO " + `mongodb://${host}:${port}/${name}`);
	if(error) {console.log(error);}

		console.log(path.join(__dirname, './files/resources/', 'DEMAX_proposal_template.docx'))

		app.get('/', async function(request, response) {
			try {response.sendFile('./files/resources/home.html', {root: __dirname});}
			catch(error) {
				console.log(error);
				return response.status(400).json({
					error: error.message
				});
			}
		});

		app.get('/help', async function(request, response) {
			try {
				response.sendFile('./files/resources/api.html', {root: __dirname});
			} catch(error) {
				console.log(error);
				return response.status(400).json({
					error: error.message
				});
			}
		});

		app.get('/word/attachment', async function(request, response) {
			try {
				response.download(__basedir + '/files/resources/' + 'DEMAX_proposal_template.docx');
			} catch(error) {
				console.log(error);
				return response.status(400).json({
					error: error.message
				});
			}
		});

		const server = app.listen(process.env.PORT || 3000, async function() {
			try {
				const port = server.address().port;
				console.log(
					"\n" +
					"STARTUP SUCCESS"
					+ "\n" +
					"SERVER RUNNING AT PORT " + port
					+ "\n"
				);
			} catch(error) {
				console.log(error);
			}
		});
	}
)
;