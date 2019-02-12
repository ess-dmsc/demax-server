const express = require('express');
const router = express.Router();
const multer = require('multer');

const pdfMerger = require('../controllers/pdf/merge.js');
const pdfGenerator = require('../controllers/pdf/generate.js');

const uploader = require('../controllers/file/upload.js');
const downloader = require('../controllers/file/download.js');
const fileManager = require('../controllers/file/manager.js');

const userManager = require('../controllers/user/admin.js');
const auth = require('../controllers/user/auth.js');

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
router.get('/file/download/:filename', downloader.getFileByUniqueName);
router.post('/file/upload/:attachment', auth.checkToken, upload.single("file"), uploader.uploadAttachment);
router.post('/proposals/:proposalId', upload.single('file'), uploader.attachFile);

router.delete('/file/delete/:proposalId/:attachmentType/:filename', fileManager.deleteFileByProposalIdAndAttachmentType);

router.get('/admin/file/all', fileManager.getAll);
router.get('/admin/file/download/:filename', fileManager.getByFilename);
router.post('/admin/file/upload', upload.single('file'), fileManager.uploadFile);
router.delete('/admin/file/delete/:filename', fileManager.deleteFileByFilename);

router.post('/users/login', auth.login);
router.post('/users/register', auth.register);

router.get('/users/:email', auth.checkToken, userController.getUserByEmail);
router.put('/users/:email', auth.checkToken, userController.editUserByEmail);
router.delete('/users/:email', auth.checkToken, userController.deleteUserByEmail);

router.get('/admin/users/', auth.checkToken, userManager.getAllUsers);

router.get('/proposals', auth.checkToken, proposalController.getAllProposals);
router.get('/proposals/:email', auth.checkToken, auth.checkToken, proposalController.getProposalsByEmail);
router.get('/proposals/meta', auth.checkToken, proposalController.getAllProposalMetaInformation);
router.post('/proposals', auth.checkToken, proposalController.submitNewProposal);
router.get('/proposals/getById/:proposalId', proposalController.getProposalByProposalId);
router.put('/proposals/:proposalId', auth.checkToken, proposalController.editProposalByProposalId);
router.delete('/proposals/:proposalId', auth.checkToken, proposalController.deleteProposalByProposalId);

module.exports = router;
