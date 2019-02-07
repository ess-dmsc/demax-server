const express = require('express')
const router = express.Router();
const multer = require('multer');

const pdfMerger = require('../controllers/pdf/merge.js');
const pdfGenerator = require('../controllers/pdf/generate.js');
const uploadFile = require('../controllers/file/upload.js');

const storage = multer.diskStorage({
	destination: (request, file, callback) => {callback(null, './files/uploads/');},
	filename: (request, file, callback) => {callback(null, file.originalname);}
});

const upload = multer({storage: storage});

router.get('/merge/:proposalId', pdfMerger);
router.get('/generate/:proposalId', pdfGenerator);

router.post('/upload/:attachment', upload.single("file"), uploadFile);

module.exports = router;