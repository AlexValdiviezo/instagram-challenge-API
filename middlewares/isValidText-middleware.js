const { request, response, next } = require('express');

const isValidText = (request, response, next) => {
    const {titulo} = request.body;
    try{
        if(titulo){
            if(titulo.includes(['@','.','!','(',')'])){
                throw Error('title Error - caracteres especiales')
            }
        }
    }catch(error){

        return response.status(400).json({
            error
        })
    }
    next();
}

module.exports = {isValidText}