const { request, response, next } = require('express');

const isUrlImg = (request, response, next) => {
    const {imagen} = request.body;
    try{
        if(imagen){
            if(!imagen.includes('http://') && !imagen.includes('https://') && !imagen.includes('C:')){
                throw Error('url Error');
            }
            if(!imagen.includes('.jpg', imagen.length - 5) && !imagen.includes('.png', imagen.length - 5) && !imagen.includes('.jpeg', imagen.length - 6) && !imagen.includes('.pneg', imagen.length - 6)){
                throw Error('debe ser una imagen valida');
            }
        }
    }catch(error){
        return response.status(400).json({
            error
        })
    }
    next();
}

module.exports = {isUrlImg};