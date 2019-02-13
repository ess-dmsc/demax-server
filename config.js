const env = process.env.NODE_ENV;

const dev = {
	app: {
		port: 3000
	},
	db: {
		host: 'localhost',
		port: 27017,
		name: 'ess'
	}
};

const stage = {
	app: {
		port: 3000
	},
	db: {
		host: 'mongodb',
		port: '',
		name: 'ess'
	}
};

const prod = {
	app: {
		port: 3000
	},
	db: {
		host: 'mongodb',
		port: '',
		name: 'ess'
	}
}

const config = {
	dev,
	stage,
	prod
};

module.exports = config[env];