const mongoose = require('mongoose');

const crystallizationSchema = new mongoose.Schema({
	moleculeName: String,
	moleculeIdentifier: String,
	oligomerizationState: String,
	crystalStructureReferencePDF: String,
	crystallizationRequirements: String,
	crystallizationPrecipitant_composition: String,
	previousCrystallizationExperience: String,
	estimatedCrystallizationProductionTime: String,
	typicalCrystalSize: String,
	typicalYieldMgPerLiter: String,
	storageConditions: String,
	stability: String,
	buffer: String,
	levelOfDeuteration: String,
	typicalProteinConcentrationUsed: String

});
module.exports = mongoose.model('crystallization', crystallizationSchema);