# demax-server

[![Build Status](https://travis-ci.org/ess-dmsc/demax-server.svg?branch=master)](https://travis-ci.org/ess-dmsc/demax-server)

This repository constitutes the backend server of the DEMAX User Office website. The frontend part can be found <a href="https://github.com/ess-dmsc/demax-client">here.</a>

The <a href="https://europeanspallationsource.se/science-support-systems/demax">Deuteration and Macromolecular Crystallisation (DEMAX)</a> platform supports life science and soft matter research users of ESS. 

The DEMAX User Office is used for submission, management and administration of proposals and requests for deuterated material production. 

### Project facts:
* Language: [JavaScript](https://www.ecma-international.org/publications/standards/Ecma-262.htm)
* Runtime: [Node.js](https://nodejs.org)
* Database: [MongoDB](https://www.mongodb.com)
* Package manager: [NPM](https://www.npmjs.com/)
* Process manager: [PM2](http://pm2.keymetrics.io/)
* Environment: [Docker](https://www.docker.com/)
* Testing: [Jenkins](https://jenkins.io/) and [Travis](https://travis-ci.org/)

## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
1. [Node.js](https://nodejs.org/en/download/)
2. [MongoDB](https://www.mongodb.com/download-center/community)
3. [PM2](http://pm2.keymetrics.io/)(Optional)

An alternative to installing MongoDB on your local machine is to use a cloud-hosted MongoDB.
(mlab.com)[https://mlab.com/] is a free-to-use Database-as-a-service.

### Installing
1. ```git clone https://github.com/ess-dmsc/demax-server.git```
2. ```cd demax-server```
3. ```npm install --save```
4. ```npm install --save -g pm2``` (Optional)

### Run
```npm run dev```

Npm run dev initiates a mongod instance and sets the server to listen at port 3000.
To check if the server works, go to <a href="http://localhost:3000/api">http://localhost:3000/api</a> -
it should look like in the picture below.

![http://localhost:3000/api](https://github.com/ess-dmsc/demax-server/blob/master/files/github/Screen%20Shot%202019-02-26%20at%2015.15.48.png)

### PM2

```pm2 start process.yaml```

To start the server with the process manager, make sure that PM2 is installed globally. The configuration file 'process.yaml' provides all the information PM2 needs to run the server. 

Useful commands:
```pm2 monit``` - Starts the PM2 app monitor
```pm2 logs``` - Display the logs
```pm2 stop 0``` - Stop the process (If you haven't used PM2 before, '0' is probably the process ID for demax-server)
```pm2 delete 0``` - Deletes the process instance

To set up the frontend, simply follow the instructions of the <a href="https://github.com/ess-dmsc/demax-client">demax-client repository</a>.

## Running the tests
```npm run local_test```

This command starts the mocha test runner with variables for local testing. The test files are located in the folder test/ and all end with ".spec.js.".

## Deployment
This server is configured to be deployed with Docker - there are several different docker-compose files in this repository for different environments.

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* Jeremias Hillerberg

## License

This project is licensed under the BSD-2 License - see the <a href="https://github.com/ess-dmsc/demax-server/blob/master/LICENSE">LICENSE.md</a> file for details

## Acknowledgments

* <a href="https://developer.mozilla.org/en-US/">Mozilla Developer Network</a>
* <a href="https://angular.io/docs">Angular</a>
* <a href="https://docs.docker.com/">Docker</a>
