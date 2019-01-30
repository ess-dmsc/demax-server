const env = process.env.NODE_ENV;

const dev = {
	app: {
		port: parseInt(process.env.DEV_APP_PORT) || 3000
	},
	db: {
		host: process.env.DEV_DB_HOST || 'localhost',
		port: parseInt(process.env.DEV_DB_PORT) || 27017,
		name: process.env.DEV_DB_NAME || 'ess'
	}
};

const test = {
	app: {
		port: parseInt(process.env.TEST_APP_PORT) || 3000
	},
	db: {
		host: process.env.TEST_DB_HOST || 'localhost',
		port: parseInt(process.env.TEST_DB_PORT) || 27017,
		name: process.env.TEST_DB_NAME || 'ess'
	}
};

const prod = {
	app: {
		port: parseInt(process.env.PROD_APP_PORT) || 3000
	},
	db: {
		host: process.env.PROD_DB_HOST || 'mongodb',
		port: parseInt(process.env.PROD_DB_PORT) || '',
		name: process.env.PROD_DB_NAME || 'ess'
	}
}

const config = {
	dev,
	test,
	prod
};

module.exports = config[env];