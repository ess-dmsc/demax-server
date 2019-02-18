const express = require('express');
const router = express.Router();
const multer = require('multer');

const pdfMerger = require('./controllers/pdf/merge.js');
const pdfGenerator = require('./controllers/pdf/generate.js');

const adminFileController = require('./controllers/admin/file.js');
const adminProposalController = require('./controllers/admin/proposal.js');
const adminUserController = require('./controllers/admin/user.js');

const auth = require('./controllers/user/auth.js');

const uploader = require('./controllers/file/upload.js');
const downloader = require('./controllers/file/download.js');
const fileManager = require('./controllers/file/manager.js');
const userController = require('./controllers/user/user.js');
const proposalController = require('./controllers/proposal.js');

const storage = multer.diskStorage({
	destination: (request, file, callback) => {callback(null, './files/uploads/');},
	filename: (request, file, callback) => {callback(null, file.originalname);}
});

const upload = multer({storage: storage});

router.get('/users/:email', auth.checkToken, userController.getUserByEmail);
router.post('/users/register', auth.register);
router.post('/users/login', auth.login);
router.put('/users/:email', auth.checkToken, userController.editUserByEmail);
router.get('/confirmation/:token', auth.confirmationGet);
router.post('/resend', auth.resendTokenPost);
router.delete('/users/:email', auth.checkToken, userController.deleteUserByEmail);

router.get('/proposals/:email', auth.checkToken, auth.checkToken, proposalController.getProposalsByEmail);
router.post('/proposals', auth.checkToken, proposalController.submitNewProposal);
router.get('/proposals/getById/:proposalId', proposalController.getProposalByProposalId);
router.put('/proposals/:proposalId', auth.checkToken, proposalController.editProposalByProposalId);
router.delete('/proposals/:proposalId', auth.checkToken, proposalController.deleteProposalByProposalId);

router.get('/file/download/:filename', downloader.getByFileName);
router.get('/file/:proposalId', downloader.getUploadedAttachmentsByProposalId);
router.post('/file/upload/:attachment', auth.checkToken, upload.single("file"), uploader.uploadAttachment);
router.delete('/file/delete/:proposalId/:attachmentType/:filename', fileManager.deleteFileByProposalIdAndAttachmentType);

router.get('/merge/:proposalId', pdfMerger);
router.get('/generate/:proposalId', pdfGenerator);

router.post('/admin/proposals/:proposalId', upload.single('file'), adminFileController.attachFile);
router.get('/admin/proposals/meta', auth.checkToken, proposalController.getAllProposalMetaInformation);
router.get('/admin/proposals', auth.checkToken, proposalController.getAllProposals);
router.get('/admin/users', auth.checkToken, adminUserController.getAll);
router.get('/admin/files', adminFileController.getAll);
router.get('/admin/file/download/:filename', adminFileController.get);
router.post('/admin/file/upload', upload.single('file'), adminFileController.uploadFile);
router.delete('/admin/file/delete/:filename', adminFileController.delete);

module.exports = router;
