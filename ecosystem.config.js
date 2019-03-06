module.exports = {
	apps: [ {
		name: 'DEMAX Server',
		script: 'server.js',
		instances: 1,
		autorestart: true,
		watch: false,
		ignore_watch: ["./node_modules","./files","./tests","./demax-client"],
		max_memory_restart: '1G',
		env: {
			NODE_ENV: 'dev'
		},
		env_prod: {
			NODE_ENV: 'prod'
		},
		env_staging: {
			NODE_ENV: 'staging'
		},
		env_travis: {
			NODE_ENV: 'travis_test'
		},
		env_jenkins: {
			NODE_ENV: 'jenkins_test'
		},
		env_test:{
			NODE_ENV: 'local_test'
		}
	} ],
};
