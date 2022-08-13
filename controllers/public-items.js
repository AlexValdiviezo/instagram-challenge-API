const { request } = require('express');
const { response } = require('express');
const PublicItem = require('../models/public-items');

const publicGet = async (request, response) => {
    try {
        const find = await PublicItem.find();
        let res = [];
        for(let i = (find.length - 1); i>=0 ; i--){
            res.push(find[i]);
        }
        response.status(200).json({
            msg: 'ok',
            data: res
        });
    } catch (error) {
        response.status(502).json({
            error
        });
    }

}

const publicPost = async (request, response) => {
    setTimeout(async() => {
        const {imagen, titulo='', likes} = request.body;
        try{
        const public = new PublicItem({
            imagen, titulo, likes
        });
        await public.save();
        response.status(201).json({
            msg: 'created',
            data: public
        });
        }catch(error){
            console.log(error);
            response.status(502).json({
                error
            })
        }
    }, 1500);
    
}

const publicPut = async (request, response) => {
    try{
        const {id, imagen, titulo='', like} = request.body;
        const find = await PublicItem.findById(id);
        let res = {};
        if(imagen) res.imagen = imagen;
        if(titulo) res.titulo = titulo;
        res.likes = find.likes + like;

        await PublicItem.findByIdAndUpdate(
            id,
            res
        )
        return response.status(202).json({
            msg: 'accepted',
            data: res
        });
    }catch(error){
        response.status(502).json({
            error
        })
    }
}

const publicDelete = async (request, response) => {
    const {id} = request.body;
    try{
        const res = await PublicItem.findByIdAndDelete(id);
        response.status(202).json({
            msg: 'ok',
            data: res
        });
    }
    catch(error){
        response.status(502).json({
            error
        })
    }
}

module.exports = {
    publicGet,
    publicPost,
    publicPut,
    publicDelete
}