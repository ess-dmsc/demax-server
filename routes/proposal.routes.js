const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const proposal_controller = require('../controllers/proposal.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', proposal_controller.test);
module.exports = router;