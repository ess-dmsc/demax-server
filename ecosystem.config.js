module.exports = {
	apps: [ {
		name: 'DEMAX Server',
		script: 'server.js',
		instances: 1,
		mode: 'fork',
		autorestart: true,
		watch: true,
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
		}
	} ],
};
