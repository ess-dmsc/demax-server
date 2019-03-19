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
		},
		output: '/data/mongodb/pm2/-out.log',
		error: '/data/mongodb/pm2/-error.err',
		log_type: 'json',
		log_date_format: 'YYYY-MM-DD HH:mm Z'
	} ],
};
