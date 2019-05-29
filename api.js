const express = require('express');
const router = express.Router();
const multer = require('multer');
const nanoid = require('nanoid/generate');

const pdfMerge = require('./core/controllers/merge.js');
const pdfGenerator = require('./core/controllers/generate.js');

const adminRouter = require('./core/routes/admin.js');

const auth = require('./core/controllers/auth.js');
const fileController = require('./core/controllers/file.js');
const userController = require('./core/controllers/user.js');
const proposalController = require('./core/controllers/proposal.js');

const storage = multer.diskStorage({
	destination: (request, file, callback) => {callback(null, './files/uploads/');},
	filename: (request, file, callback) => {callback(null,
		nanoid('0123456789', 8) + '_' + file.originalname.replace(/\s|&;\$%@"<>\(\)\+,/g, "-"))
	}
});

const upload = multer({storage: storage});
router.use('/admin', auth.checkPermission, adminRouter);

router.post('/users/register', auth.register);
router.get('/users/forgotpassword/:email', auth.forgotPassword);
router.post('/users/login', auth.login);

router.get('/users/:email', auth.checkToken, userController.getUserByEmail);
router.put('/users/:email', auth.checkToken, userController.editUserByEmail);
router.get('/confirmation/:token', auth.confirmationGet);
router.post('/resend', auth.resendTokenPost);
router.get('/users/forgot-pw/:email', auth.forgotPassword);
router.delete('/users/:email', auth.checkToken, userController.deleteUserByEmail);

router.get('/getActiveCycle', auth.checkToken, proposalController.getActiveCycle);

router.get('/proposals/:email', auth.checkToken, auth.checkToken, proposalController.getProposalsByEmail);
router.post('/proposals', auth.checkToken, proposalController.submitNewProposal);

router.get('/proposals/getById/:proposalId', proposalController.getProposalByProposalId);
router.get('/proposals/download/:proposalId', proposalController.downloadProposal);
router.put('/proposals/:proposalId', auth.checkToken, proposalController.editProposalByProposalId)

router.put('/proposals/sync/:proposalId', auth.checkToken, proposalController.syncProposal);
router.put('/proposals/submit/:proposalId', auth.checkToken, proposalController.submitProposal);
router.delete('/proposals/:proposalId', auth.checkToken, proposalController.deleteProposalByProposalId);

router.get('/file/download/:filename', fileController.getByFileName);
router.get('/file/:proposalId', fileController.getUploadedAttachmentsByProposalId);
router.post('/file/upload/:attachment', auth.checkToken, upload.single("file"), fileController.uploadAttachment);
router.delete('/file/delete/:proposalId/:attachmentType/:filename', fileController.deleteFileByProposalIdAndAttachmentType);
router.post('/file/upload2', upload.single('file'), fileController.upload);
router.get('/generate/:proposalId', pdfGenerator, pdfMerge.mergeByProposalId, pdfMerge.sendmergedPdf);

router.get('/word/attachment', async function(request, response) {
	try {
		response.download('./resources/documents/DEMAX_proposal_template.docx');
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
});

router.get('/', async function(request, response) {
	try {response.sendFile(__dirname + '/resources/html/home.html');}
	catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
});

router.get('/help', async function(request, response) {
	try {
		response.sendFile('./resources/html/api.html', {root: __dirname});
	} catch(error) {
		console.log(error);
		return response.status(400).json({
			error: error.message
		});
	}
});
module.exports = router;
