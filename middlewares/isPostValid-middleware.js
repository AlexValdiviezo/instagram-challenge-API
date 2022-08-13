const { request, response, next } = require('express');

const isPostValid = (request, response, next) =>{
    const {imagen, titulo} = request.body;
    try {
        if(!imagen) throw Error('Parametros invalidos')
    } catch (error) {
        return response.status(400).json({
            error
        })
    }
    next();
}

module.exports = {isPostValid}