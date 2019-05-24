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
		output: '/usr/src/app/files/pm2/out.log',
		error: '/usr/src/app/files/pm2/error.log',
		log_type: 'json',
		log_date_format: 'YYYY-MM-DD HH:mm Z'
	} ],
};