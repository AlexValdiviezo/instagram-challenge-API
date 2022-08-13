const { request } = require('express');
const { response } = require('express');
const PublicItem = require('../models/public-items');

const uploadPost = async (request, response) => {
    const {destination, filename} = request.file;
    response.status(202).json({
        msg: 'ok',
        url: destination + filename
    });
}

module.exports = {uploadPost}