import * as chai from 'chai';
import { describe, it } from 'mocha';

process.env.NODE_ENV = 'test';
import { app } from '../server.js';
import Proposal from '../models/proposal';

chai.use(require('chai-http')).should();

describe('Proposals', () => {

	beforeEach(done => {
		Proposal.remove({}, err => {
			done();
		});
	});

	describe('Backend tests for proposals', () => {

		it('should get all the proposals', done => {
			chai.request(app)
			.get('/api/proposals')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body.length.should.be.eql(0);
				done();
			});
		});

		it('should get proposals count', done => {
			chai.request(app)
			.get('/api/proposals/count')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('number');
				res.body.should.be.eql(0);
				done();
			});
		});

		it('should create new proposal', done => {
			const proposal = new Proposal({ name: 'Proposal 1', experiment_title: 'test', brief_summary: 'test' });
			chai.request(app)
			.post('/api/proposals')
			.send(proposal)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.a.property('experiment_title');
				res.body.should.have.a.property('brief_summary');
				res.body.should.have.a.property('main_proposer');
				done();
			});
		});

		it('should get a proposal by its id', done => {
			const proposal = new Proposal({ name: 'Proposal', weight: 2, age: 4 });
			proposal.save((error, newProposal) => {
				chai.request(app)
				.get(`/api/proposal/${newProposal.id}`)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('name');
					res.body.should.have.property('weight');
					res.body.should.have.property('age');
					res.body.should.have.property('_id').eql(newProposal.id);
					done();
				});
			});
		});

		it('should update a proposal by its id', done => {
			const proposal = new Proposal({ name: 'Proposal', weight: 2, age: 4 });
			proposal.save((error, newProposal) => {
				chai.request(app)
				.put(`/api/proposal/${newProposal.id}`)
				.send({ weight: 5 })
				.end((err, res) => {
					res.should.have.status(200);
					done();
				});
			});
		});

		it('should delete a proposal by its id', done => {
			const proposal = new Proposal({ name: 'Proposal', weight: 2, age: 4 });
			proposal.save((error, newProposal) => {
				chai.request(app)
				.del(`/api/proposal/${newProposal.id}`)
				.end((err, res) => {
					res.should.have.status(200);
					done();
				});
			});
		});
	});

});
