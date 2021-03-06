const env = process.env.NODE_ENV;

const travis_test = {
	app:{
		port: 3000
	},
	db:{
		host: 'localhost',
		port: '27017',
		name: 'ess'
	}
};
const gcloud_test ={
	app:{
		port:3000
	},
	db:{
		host: 'mongodb',
		port: '27017',
		name: 'ess'
	}
}
const jenkins_test = {
	app:{
		port: 3000
	},
	db:{
		host: 'mongodb',
		port: '',
		name: 'ess'
	}
};

const local_test = {
	app: {
		port: 3000
	},
	db: {
		host: 'localhost',
		port: '27017',
		name: 'ess'
	}
};

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
	jenkins_test,
	travis_test,
	local_test,
	gcloud_test,
	dev,
	stage,
	prod
};

module.exports = config[env];
