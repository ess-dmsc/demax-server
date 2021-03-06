const PDFDocument = require('pdfkit');
const Proposal = require('../models/proposal.js');
const fs = require('file-system');

const bold = './resources/fonts/titillium-bold-webfont.woff';
const regular = './resources/fonts/titillium-regular-webfont.woff';
const italic = './resources/fonts/titillium-regularitalic-webfont.woff';
const semibold = './resources/fonts/titillium-semibold-webfont.woff';

async function generate(request, response, next) {
	try {
		const doc = new PDFDocument();

		const proposal = await Proposal.findOne({proposalId: request.params.proposalId});
		let filename = proposal.proposalId + '';
		filename = encodeURIComponent(filename) + '.pdf';

		response.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
		response.setHeader('Content-type', 'application/pdf');
		response.setHeader('Access-Control-Allow-Origin', '*');

		doc.info[ 'Title' ] = proposal.proposalId + '.pdf';
		doc.info[ 'Author' ] = proposal.mainProposer.firstName + ' ' + proposal.mainProposer.lastName;

		doc.font(semibold, 16).text(proposal.experimentTitle).moveDown().fontSize(12).text('Brief summary: ').font(regular, 12).text(proposal.briefSummary).moveDown().font(semibold, 14).text('Main proposer:').font(regular, 12).text(proposal.mainProposer.firstName + ' ' + proposal.mainProposer.lastName).text(proposal.mainProposer.email).text(proposal.mainProposer.phone).text(proposal.mainProposer.employer).text(proposal.mainProposer.jobTitle).moveDown().font(semibold, 12).text('Co-proposers:');

		if(proposal.coProposers.length > 0) {
			for(let i = 0; i < proposal.coProposers.length; i++) {
				doc.font(regular, 12).text(proposal.coProposers[ i ].firstName + ' ' + proposal.coProposers[ i ].lastName + ', ' + proposal.coProposers[ i ].affiliation).text(proposal.coProposers[ i ].email);
			}
		}

		doc.moveDown().font(semibold, 12).text('Indicators').font(semibold, 12).text('Links with industry:   ' + proposal.linksWithIndustry)
		.font(semibold, 12).text('Details:    ' + proposal.linksWithIndustryDetails)
		.font(semibold, 12).text('Are any of the co-proposers students?   ' + proposal.coProposerStudents).font(semibold, 12).text('Does the proposal work towards a students degree?   ' + proposal.workTowardsStudentsDegree).moveDown().font(semibold, 12).text('Need-by-date:   ' + proposal.needByDate.slice(0, 10)).font(semibold, 12).text('Motivation:').font(regular, 12).text(proposal.needByDateMotivation).moveDown().font(semibold, 12).text('Required deuteration methods');

		if(proposal.wantsCrystallization) {
			doc.font(semibold, 12).text('(A) Crystallization');
		}
		if(proposal.wantsBiologicalDeuteration) {
			doc.font(semibold, 12).text('(B) Biological deuteration');
			if(proposal.wantsBiomassDeuteration) {
				doc.font(regular, 12).text('For biomass');
			}
			if(proposal.wantsProteinDeuteration) {
				doc.font(regular, 12).text('For proteins');
			}
			if(proposal.wantsYeastDeuteration) {
				doc.font(regular, 12).text('For yeast');
			}
			if(proposal.wantsOtherDeuteration) {
				doc.font(regular, 12).text('Other');
			}
		}
		if(proposal.wantsChemicalDeuteration) {
			doc.font(semibold, 12).text('(C) Chemical deuteration');
		}

		if(proposal.wantsCrystallization) {
			doc.addPage().font(semibold, 18).text('(A) CRYSTALLIZATION').moveDown().font(italic, 12).text('Required information to include in “Practical Considerations” section of your proposal: SDS-PAGE and chromatogram of protein purification to indicate yield & purity; photo of crystal.').moveDown().font(semibold, 13).text('Name of molecule to be crystallized (e.g. superoxide dismutase): ').font(regular, 12).text(proposal.crystallization.moleculeName).moveDown().font(semibold, 13).text('FASTA sequence or Uniprot number: ').font(regular, 12).text(proposal.crystallization.moleculeIdentifier).moveDown().font(semibold, 13).text('Molecular weight (kDA): ').font(regular, 12).text(proposal.crystallization.molecularWeight).moveDown().font(semibold, 13).text('Oligomerization state: ').font(regular, 12).text(proposal.crystallization.oligomerizationState).moveDown().font(semibold, 13).text('PDB ID of crystal structure: ').font(regular, 12).text(proposal.crystallization.pbdId).moveDown().font(semibold, 13).text('DOI: ').font(regular, 12).text(proposal.crystallization.doi).moveDown().font(semibold, 13).text('Does the protein have any co-factors or ligands required for crystallization? Specify: ').font(regular, 12).text(proposal.crystallization.crystallizationRequirements).moveDown().font(semibold, 13).text('Known crystallization precipitant composition (incl. buffer, salt, additives, pH): ').font(regular, 12).text(proposal.crystallization.crystallizationPrecipitantComposition).moveDown().font(semibold, 13).text('What crystallization method, volume, and temperature have you used in the past?').font('Times-Roman').text('(e.g. vapour diffusion, 10µL drops, room temperature)').font(regular, 12).text(proposal.crystallization.previousCrystallizationExperience).moveDown().font(semibold, 13).text('How long do your crystals take to appear?: ').font(regular, 12).text(proposal.crystallization.estimatedCrystallizationProductionTime).moveDown().font(semibold, 13).text('What is the typical size of your crystal?').font('Times-Roman').text('(µm x µm x µm): ').font(regular, 12).text(proposal.crystallization.typicalCrystalSize).moveDown().font(semibold, 16);

			doc.addPage().text('Details from protein preparation').moveDown().font(semibold, 13).text('Typical yield (mg per liter of culture):').font(regular, 12).text(proposal.crystallization.typicalYieldMgPerLiter).moveDown().font(semibold, 13).text('Storage conditions (e.g. stable at 4 °C or frozen at -20 °C):').font(regular, 12).text(proposal.crystallization.storageConditions).moveDown().font(semibold, 13).text('Stability:').font(regular, 12).text(proposal.crystallization.stability).moveDown().font(semibold, 13).text('What buffer is your protein in?:').font(regular, 12).text(proposal.crystallization.buffer).moveDown().font(semibold, 13).text('Is your protein partially or fully deuterated?:').font(regular, 12).text(proposal.crystallization.levelOfDeuteration).moveDown().font(semibold, 13).text('What protein concentration do you usually use for crystallization: ').font(regular, 12).text(proposal.crystallization.typicalProteinConcentrationUsed).moveDown().font(semibold, 13).text('Other:').font(regular, 12).text(proposal.crystallization.other);
		}
		if(proposal.wantsBiomassDeuteration) {
			doc.addPage().font(semibold, 18).text('(B) BIOLOGICAL DEUTERATION').moveDown().font(italic, 12).text('If the protein is to be purified by us, please remember to include a chromatogram from purification and a picture of SDS-PAGE that indicates MW and purity in your science case.').moveDown().font(semibold, 16).text('For biomass').moveDown().font(semibold, 13).text('Will user provide the organism for us to grow under deuterated conditions?').font(regular, 12).text(proposal.biomassDeuteration.organismProvidedByUser).moveDown().font(semibold, 13).text('What is the organism?').font(regular, 12).text(proposal.biomassDeuteration.organismDetails).moveDown().font(regular, 12).text(proposal.biomassDeuteration.organismReferenceAttachment).moveDown().font(semibold, 13).text('How much material do you need (indicate wet or dry mass)').font(regular, 12).text(proposal.biomassDeuteration.amountNeeded).moveDown().font(semibold, 13).text('Justify amount').font(regular, 12).text(proposal.biomassDeuteration.amountNeededMotivation).moveDown().font(semibold, 13).text('Level of deuteration required:').font(regular, 12).text(proposal.biomassDeuteration.deuterationLevelRequired).moveDown().font(semibold, 13).text('Justify level of D incorporation').font(regular, 12).text(proposal.biomassDeuteration.deuterationLevelMotivation).moveDown();
		}
		if(proposal.wantsProteinDeuteration) {
			doc.addPage().font(semibold, 16).text('For proteins').moveDown().font(semibold, 13).text('Name of molecule to be deuterated (e.g. superoxide dismutase):').font(regular, 12).text(proposal.proteinDeuteration.moleculeName).moveDown().font(semibold, 13).text('FASTA sequence or Uniprot number:').font(regular, 12).text(proposal.proteinDeuteration.moleculeIdentifier).moveDown().font(semibold, 13).text('Oligomerizarion state? (e.g. homodimer, tetramer etc.):').font(regular, 12).text(proposal.proteinDeuteration.oligomerizationState).moveDown().font(semibold, 13).text('Does the protein have any co-factors or ligands required for expression? Specify: ').font(regular, 12).text(proposal.proteinDeuteration.expressionRequirements).font(semibold, 13).text('Origin of molecules (e.g. human, E. coli, S. cerevisiae):').font(regular, 12).text(proposal.proteinDeuteration.moleculeOrigin).moveDown().font(semibold, 13).text('Will you provide an expression plasmid?').font(regular, 12).text(proposal.proteinDeuteration.expressionPlasmidProvidedByUser).moveDown().font(semibold, 13).text('If “yes”, please provide details (e.g. pET31b, C-terminal His-tag, Amp selection) If “no”, we will design & order a plasmid commercially)').font(regular, 12).text(proposal.proteinDeuteration.expressionPlasmidProvidedByUserDetails).moveDown().font(semibold, 13).text('How much material do you need: ').font(regular, 12).text(proposal.proteinDeuteration.amountNeeded).moveDown().font(semibold, 13).text('Justify amount:').font(regular, 12).text(proposal.proteinDeuteration.amountNeededMotivation).moveDown().font(semibold, 13).text('Level of deuteration required: ').font(regular, 12).text(proposal.proteinDeuteration.deuterationLevelRequired).moveDown().font(semibold, 13).text('Justify level of D incorporation:').font(regular, 12).text(proposal.proteinDeuteration.deuterationLevelMotivation).moveDown().font(semibold, 13).text('Will you need DEMAX to purify the protein from deuterated biomass?').font(regular, 12).text(proposal.proteinDeuteration.needsPurificationSupport).moveDown().font(semibold, 13).text('Has expression been done for the unlabeled protein?').font(regular, 12).text(proposal.proteinDeuteration.hasDoneUnlabeledProteinExpression).moveDown().font(semibold, 13).text('Typical yield:').font(regular, 12).text(proposal.proteinDeuteration.typicalYield).moveDown().font(semibold, 13).text('Have you been able to purify the unlabeled protein?').font(italic, 12).text('Please include chromatogram & image of SDS-PAGE in proposal.').font(regular, 12).text(proposal.proteinDeuteration.hasDoneProteinPurification).moveDown().font(semibold, 13).text('Have you tried to deuterate the protein yourself, even in small scale?').font(regular, 12).text(proposal.proteinDeuteration.hasProteinDeuterationExperience).moveDown().font(semibold, 13).text('Results?:').font(regular, 12).text(proposal.proteinDeuteration.proteinDeuterationResults).moveDown();
		}
		if(proposal.wantsYeastDeuteration) {
			doc.addPage().font(semibold, 16).text('For yeast').moveDown().font(semibold, 13).text('How much material do you need?').font(regular, 12).text(proposal.yeastDeuteration.amountNeeded).moveDown().font(semibold, 13).text('Justify amount:').font(regular, 12).text(proposal.yeastDeuteration.amountNeededMotivation).moveDown().font(semibold, 13).text('Level of deuteration required:').font(regular, 12).text(proposal.yeastDeuteration.deuterationLevelRequired).moveDown().font(semibold, 13).text('Justify level of D incorporation:').font(regular, 12).text(proposal.yeastDeuteration.deuterationLevelMotivation).moveDown();
		}
		if(proposal.wantsOtherDeuteration) {
			doc.addPage().moveDown().font(semibold, 16).text('Biological deuteration - other:').moveDown().font(regular, 12).text(proposal.other);
		}
		if(proposal.wantsBiologicalDeuteration) {
			doc.addPage().moveDown().font(semibold, 16).text('Biosafety').moveDown().font(semibold, 13).text('Which biosafety containment level is required to work with your sample?').font(regular, 12).text(proposal.bioSafety.bioSafetyContainmentLevel).moveDown().font(semibold, 13).text('Is your organism a live virus, toxin-producing, or pose ay risk to human health and/or the environment?').font(regular, 12).text(proposal.bioSafety.organismRisk).moveDown().font(semibold, 13).text('Is the protein recombinant?').font(regular, 12).text(proposal.bioSafety.proteinIsRecombinant).moveDown().font(semibold, 13).text('Is the sample a toxin?').font(regular, 12).text(proposal.bioSafety.sampleIsToxin).moveDown().font(semibold, 13).text('Is the sample a virulence factor?').font(regular, 12).text(proposal.bioSafety.sampleIsVirulenceFactor).moveDown().font(semibold, 13).text('Is the sample a prion protein?').font(regular, 12).text(proposal.bioSafety.sampleIsPrionProtein).moveDown().font(semibold, 13).text('Does the sample have a hazardous ligand (e.g. heavy metal, toxic molecule etc.)?').font(regular, 12).text(proposal.bioSafety.sampleHasHazardousLigand).moveDown().font(semibold, 13).text('If the sample is a a bacteria or virus, specificy whether it is inactive/active:').font(regular, 12).text(proposal.bioSafety.sampleActivity).moveDown().font(semibold, 13).text('If you answered "yes" to any of the above, please explan:').font(regular, 12).text(proposal.bioSafety.other).moveDown();
		}
		if(proposal.wantsChemicalDeuteration) {
			doc.addPage().font(semibold, 18).text('(C) CHEMICAL DEUTERATION').moveDown().font(semibold, 13).text('Molecule/s to be deuterated (name):').font(regular, 12).text(proposal.chemicalDeuteration.moleculeName).moveDown().font(semibold, 13).text('Amount of material required (mass):').font(regular, 12).text(proposal.chemicalDeuteration.amount).moveDown().font(semibold, 13).text('Justify amount:').font(regular, 12).text(proposal.chemicalDeuteration.amountMotivation).moveDown().font(semibold, 13).text('Indicate percentage and location of deuteration:').font(regular, 12).text(proposal.chemicalDeuteration.deuterationLocationAndPercentage).moveDown().font(semibold, 13).text('Justify level of deuteration:').font(regular, 12).text(proposal.chemicalDeuteration.deuterationLevelMotivation).moveDown().font(semibold, 13).text('Has this molecule (or an unlabeled/isotopic analogue) been prepared by yourself or others?').font(regular, 12).text(proposal.chemicalDeuteration.hasPreparedMolecule).moveDown();
		}

		doc.save();
		doc.pipe(fs.createWriteStream('./files/generated/' + proposal.proposalId + '.pdf'));
		let generatedDoc = await doc.pipe(fs.createWriteStream('./files/generated/' + proposal.proposalId + '.pdf'));
		doc.end();

		await proposal.update({
			generatedProposal: {
				path: `"./files/generated/${proposal.proposalId}.pdf"`,
				name: proposal.proposalId + '.pdf',
				generated: true
			}
		});
		next();
	} catch(error) {
		console.log('PDF Generation error');
	}
};

module.exports = generate;
