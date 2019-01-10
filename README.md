# demax-server

This repository constitutes the backend server of the DEMAX User Office website. 
This system will be used for submission and management of deuteration proposals at DEMAX. 
It is built in javascript using node.js and MongoDB.

The frontend part can be found <a href="https://github.com/ess-dmsc/demax-client">here.</a>

## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
1. [Node.js](https://nodejs.org)
2. [MongoDB](https://www.mongodb.com)

### Installing
1. ```git clone https://github.com/ess-dmsc/demax-server.git```
2. ```cd demax-server```
3. ```npm install --save```

### Run
```npm run dev```

Npm run dev initiates a mongod instance and sets the server to listen at port 8080.
Note that you will also need to install a frontend or populate the database to check if the system works.
To set up the frontend, simply follow the instructions of the <a href="https://github.com/ess-dmsc/demax-client">demax-client repository</a>.

## Running the tests
```npm test```

Npm test starts mocha which looks for test files in tests/

## Deployment
*To be completed*

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* Jeremias Hillerberg

## License

This project is licensed under the BSD-2 License - see the <a href="https://github.com/ess-dmsc/demax-server/blob/master/LICENSE">LICENSE.md</a> file for details

## Acknowledgments

* Hat tip to anyone whose code was used
