const { Router, request , response, next} = require('express');
const router = Router();
const {uploadPost} = require('../controllers/upload');
const multer = require('multer');
const mimeTypes = require('mime-types')

const storage = multer.diskStorage({
    destination: __dirname + '/uploads/',
    filename: function(req, file, cb){
        cb("", Date.now() + file.originalname +"." + mimeTypes.extension(file.mimetype));
    }
})

const upload = multer({
    storage: storage
})

router.post('/', [upload.single('photo')], uploadPost);

module.exports = router;