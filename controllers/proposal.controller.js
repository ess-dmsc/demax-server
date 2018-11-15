const Proposal = require('../models/proposal.js');
const express = require('express');

exports.test = function (req, res) {
	res.send('Greetings from the Test controller!');
};

exports.getAll = function (request, response) {
	Proposal.find({}, (error, docs) => {
		if (error) {
			return console.error(error);
		}
		response.status(200).json(docs);
	});
};

exports.count = function (request, response) {
	Proposal.count((error, count) => {
		if (error) {
			return console.error(error);
		}
		response.status(200).json(count);
	});
};

exports.insert = function (request, response) {
	const newProposal = new Proposal(request.body);
	newProposal.save((error, item) => {
		// 11000 is the code for duplicate key error
		if (error && error.code === 11000) {
			response.sendStatus(400);
		}
		if (error) {
			return console.error(error);
		}
		response.status(200).json(item);
	});
};

exports.get = function (request, response) {
	Proposal.findOne({_id: request.params.id}, (error, item) => {
		if (error) {
			return console.error(error);
		}
		response.status(200).json(item);
	});
};

exports.update = function (request, response) {
	Proposal.findOneAndUpdate({_id: request.params.id}, request.body, (error) => {
		if (error) {
			return console.error(error);
		}
		response.sendStatus(200);
	});
};

exports.delete = function (request, response) {
	Proposal.findOneAndRemove({_id: request.params.id}, (error) => {
		if (error) {
			return console.error(error);
		}
		response.sendStatus(200);
	});
};