/*const mongoose = require('mongoose');
const config = require('./config');

const {db: {host, port, name}} = config;
const connectionString = `mongodb://${host}:${port}/${name}`;

//mongoose.connect(connectionString);

mongoose.Promise = global.Promise;
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function(error) {
	console.log('DATABASE CONNECTION SUCCESS' + "\n" + "CONNECTED TO " + `mongodb://${host}:${port}/${name}`);
	if(error) {console.log(error);}
});
	*/