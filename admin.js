const express = require('express');
const router = express.Router();
const multer = require('multer');
global.__basedir = __dirname;

const fileController = require('./controllers/admin/file.js');
const proposalController = require('./controllers/admin/proposal.js');
const userController = require('./controllers/admin/user.js');

const auth = require('./controllers/user/auth.js');

const storage = multer.diskStorage({
	destination: (request, file, callback) => {callback(null, './files/uploads/');},
	filename: (request, file, callback) => {callback(null, file.originalname);}
});

const upload = multer({storage: storage});

router.get('/proposals', auth.checkToken, proposalController.getAll);
router.get('/proposals/meta', auth.checkToken, proposalController.getMeta);
router.get('/proposals/:proposalId', auth.checkToken, proposalController.get);
router.delete('/proposals/:proposalid', auth.checkToken, proposalController.delete);

router.get('/files', fileController.getAll);
router.get('/files/:filename', fileController.get);
router.post('/files/upload', upload.single('file'), fileController.uploadFile);
router.delete('/files/:filename', fileController.delete);

router.put('/users/changepassword/:email', userController.changePassword);
router.get('/users', auth.checkToken, userController.getAll);
router.get('/users/:email', userController.get);
router.put('/users/:email', userController.put);
router.delete('/users/:email', userController.delete);

module.exports = router;
