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

const publicPut = async (request, response) => {
    const {id, like} = request.body;
    const find = await PublicItem.findById(id);
    const {imagen, titulo, likes} = find;
    res = {
        imagen: imagen,
        titulo: titulo,
        likes: likes+like
    }
    await PublicItem.findByIdAndUpdate(
        id,
        res
    )
    response.send('ok');
}

const publicDelete = async (request, response) => {
    await PublicItem.findByIdAndDelete(request.body.id);
    response.send('ok');
}

module.exports = {
    publicGet,
    publicPost,
    publicPut,
    publicDelete
}