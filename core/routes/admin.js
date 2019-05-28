const express = require('express');
const router = express.Router();
const multer = require('multer');
global.__basedir = __dirname;

const fileController = require('../controllers/admin/file.js');
const proposalController = require('../controllers/admin/proposal.js');
const userController = require('../controllers/admin/user.js');
const cycleController = require('../controllers/admin/cycle.js');


const storage = multer.diskStorage({
	destination: (request, file, callback) => {callback(null, './files/uploads/');},
	filename: (request, file, callback) => {callback(null, file.originalname);}
});

const upload = multer({storage: storage});

router.get('/proposals', proposalController.getAll);
router.get('/proposals/meta',proposalController.getMeta);
router.get('/proposals/:proposalId', proposalController.get);
router.delete('/proposals/:proposalid', proposalController.delete);

router.get('/cycles', cycleController.getCycles);
router.get('/cycles/:cycleId', cycleController.getCycleById);
router.post('/cycles', cycleController.createNewCycle);
router.put('/cycles/:cycleId', cycleController.editCycle);
router.delete('/cycles/:cycleId', cycleController.deleteCycle);

router.get('/proposals/comments/:proposalId', proposalController.getComments);
router.post('/proposals/comment/:proposalId', proposalController.addComment);
router.delete('/proposals/comments/:proposalId/:commentId', proposalController.deleteComment);

router.get('/proposals/tsf/:proposalId', proposalController.getTsf);
router.post('/proposals/tsf/:proposalId', proposalController.addTsf);
router.delete('/proposals/tsf/:proposalId/:tsfId', proposalController.deleteTsf);


router.get('/proposals/:startDate/:endDate', proposalController.getByDate);

router.get('/search', proposalController.getByQuery);

router.get('/files', fileController.getAll);
router.get('/files/:filename', fileController.get);
router.post('/files/upload', upload.single('file'), fileController.uploadFile);
router.delete('/file/delete/:filename', fileController.delete);

router.put('/users/changepassword/:email/:password', userController.changePassword);
router.get('/users', userController.getAll);
router.get('/users/:email', userController.get);
router.put('/users/:email', userController.put);
router.delete('/users/:email', userController.delete);

module.exports = router;
