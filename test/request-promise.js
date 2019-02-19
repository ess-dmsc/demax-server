const http = require('http');

const httpRequest = {
	get: url => {
		return (new Promise(function(resolve, reject) {
			http.get(url, response => {
				resolve(response);
			});
		}));
	}
};

module.exports = httpRequest;