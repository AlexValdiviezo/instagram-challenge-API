const { request } = require('express');
const { response } = require('express');
const PublicItem = require('../models/public-items');
const cloudinary = require('../utils/cloudinary')

const uploadPost = async (request, response) => {
   try {
      const {url} = await cloudinary.uploader.upload(request.file.path, {
         folder: 'instagram-challenge'
      });
      response.status(202).json({
         url
      })
   } catch (error) {
      response.status(402).json({
         msg: 'bad gateway',
         error
        })
   }
}

module.exports = {uploadPost}