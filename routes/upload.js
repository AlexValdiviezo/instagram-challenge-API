const { Router, request , response, next} = require('express');
const router = Router();
const multer = require('multer');
const mimeTypes = require('mime-types')

const {
    uploadPost
} = require('../controllers/upload');

const upload = require('../utils/multer');


router.post('/', upload.single('photo'), uploadPost);

module.exports = router;