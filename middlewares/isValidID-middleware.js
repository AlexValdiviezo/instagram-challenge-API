const {request, response, next} = require('express');

const { check, validationResult } = require('express-validator');

const isValidID = (request, response, next) => {
    const {id} = request.body;
    try{
        if(!check('id').isMongoId()) throw Error('No es un id valido');
    }catch(error){
        return response.status(400).json({
            error
        })
    }
    next();
}

module.exports = {isValidID}