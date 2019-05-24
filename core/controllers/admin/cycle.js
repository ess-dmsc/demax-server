const Cycle = require('../../models/cycle.js');


exports.getCycles = async function(request, response) {
	try {
		const cycles = await Cycle.find({});
		response.status(200).json(cycles);
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

exports.getCycleById = async function(request, response) {
	try {
		const cycle = await Cycle.findOne({cycleId: request.params.cycleId});
		response.status(200).json(cycle);
	}

	catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

exports.deleteCycle = async function(request, response) {
	try {
		await Cycle.findOneAndDelete({
			cycleId: request.params.cycleId
		});
		console.log(request.params.cycleId);
		response.status(200).json(request.params.cycleId + ' was successfully deleted.');
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

exports.createNewCycle = async function(request, response) {
	try {
		const newCycle = request.body;
		await new Cycle(newCycle).save();
		response.status(201).json(newCycle);
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
};

exports.editCycle = async function(request, response) {
	try {
		console.log(request.body)
		await Cycle.findOneAndUpdate({_id: request.params.id}, request.body);
		response.status(200).json(request.params.cycleId + ' was successfully saved.');
	} catch(error) {
		
		console.log(error);
		return response.status(200).json({
			error: error.message
		});
	}
};