/*
* let GridFsStorage = require('multer-gridfs-storage');
 let gridfs = require('gridfs-stream');
 gridfs.mongo = mongoose.mongo;

 const gfs = gridfs(connection.db);

 app.post('/api/file/upload', function(request, response) {

 var form = new formidable.IncomingForm();
 form.parse(request);
 form.on('fileBegin', async function(name, file, error) {
 if(error || !file) {
 response.status(404).send('File Not Found');
 return;
 }
 file.path = './files/uploads/' + file.name;
 const filename = file.name;
 const writestream = await gfs.createWriteStream({
 filename: filename,
 });
 try {
 fs.createReadStream("./files/uploads/" + filename).pipe(writestream);
 writestream.on('close', (file) => {
 console.log(file._id);
 console.log(typeof file)
 response.json(file._id);
 });
 } catch(error) {
 return response.status(400).json({
 error: err.message
 });
 }
 });

 form.on('file', function(name, file, error) {
 if(error || !file) {
 response.status(404).send('File Not Found');
 return;
 }
 console.log('Uploaded ' + file.name);
 });
 });

 app.get('/api/file/download', (request, response) => {

 let filename = request.query.filename;

 gfs.exist({
 filename: filename
 }, (err, file) => {
 if(err || !file) {
 response.status(404).send('File Not Found');
 return;
 }

 const readstream = gfs.createReadStream({
 filename: filename
 });
 readstream.pipe(response);
 });
 });

 app.get('/api/file/delete', (request, response) => {

 const filename = request.query.filename;

 gfs.exist({
 filename: filename
 }, (err, file) => {
 if(err || !file) {
 response.status(404).send('File Not Found');
 return;
 }

 gfs.remove({
 filename: filename
 }, (err) => {
 if(err) response.status(500).send(err);
 response.send('File Deleted');
 });
 });
 });

 app.get('/api/file/meta', (request, response) => {

 const filename = request.query.filename;

 gfs.exist({
 filename: filename
 }, (err, file) => {
 if(err || !file) {
 response.send('File Not Found');
 return;
 }

 gfs.files.find({
 filename: filename
 }).toArray((err, files) => {
 if(err) response.send(err);
 response.json(files);
 });
 });
 });
*
* */