const express = require('express');
const router = express.Router();

const proposal_controller = require('../controllers/proposal.controller');


router.get('/test', proposal_controller.test);
router.get('/', proposal_controller.getAll);
router.get('/count', proposal_controller.count);
router.post('/', proposal_controller.insert);
router.get('/:id', proposal_controller.get);
router.put('/:id', proposal_controller.update);
router.delete('/:id', proposal_controller.delete);

module.exports = router;