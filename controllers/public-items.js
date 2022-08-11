const { request } = require('express');
const { response } = require('express');
const PublicItem = require('../models/public-items');

const publicGet = async (request, response) => {
    const find = await PublicItem.find();
    let res = [];
    for(let i = (find.length - 1); i>=0 ; i--){
        res.push(find[i]);
    }
    response.json(res);
}

const publicPost = async (request, response) => {
    const public = new PublicItem(request.body);
    await public.save();
    response.send('ok');
}

module.exports = {
    publicGet,
    publicPost
}