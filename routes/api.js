const express = require('express')
const router = express.Router();
const multer = require('multer');

const pdfMerger = require('../controllers/pdf/merge.js');
const pdfGenerator = require('../controllers/pdf/generate.js');

const uploader = require('../controllers/file/upload.js');
const downloader = require('../controllers/file/download.js');
const fileManager = require('../controllers/file/manager.js');

const userManager = require('../controllers/user/admin.js');
const loginUser = require('../controllers/user/login.js');
const registerUser = require('../controllers/user/register.js');

const userController = require('../controllers/user/user.js');
const proposalController = require('../controllers/proposal.js');

const storage = multer.diskStorage({
	destination: (request, file, callback) => {callback(null, './files/uploads/');},
	filename: (request, file, callback) => {callback(null, file.originalname);}
});

const upload = multer({storage: storage});

router.get('/merge/:proposalId', pdfMerger);
router.get('/generate/:proposalId', pdfGenerator);

router.get('/file/:proposalId', downloader.getUploadedAttachmentsByProposalId);
router.post('/file/upload/:attachment', upload.single("file"), uploader.uploadAttachment);
router.delete('/file/delete/:filename', fileManager.deleteFileByProposalIdAndAttachmentType);

router.get('/admin/file/all', fileManager.getAll);
router.get('/admin/file/:filename', fileManager.getByFilename);

router.post('/users/login', loginUser.login);
router.post('/users/register', registerUser.register);

router.get('/users/:email',userController.getUserByEmail);
router.put('/users/:email', userController.editUserByEmail);
router.delete('/users/:email', userController.deleteUserByEmail);

router.get('/admin/users/', userManager.getAllUsers);

router.get('/proposals',proposalController.getAllProposals);
router.get('/proposals/:email',proposalController.getProposalsByEmail);
router.get('/proposals/meta',proposalController.getAllProposalMetaInformation);
router.post('/proposals',proposalController.submitNewProposal);
router.get('/proposals/:proposalId',proposalController.getProposalByProposalId);
router.put('/proposals/:proposalId',proposalController.editProposalByProposalId);
router.delete('/proposals/:proposalId',proposalController.deleteProposalByProposalId);


module.exports = router;