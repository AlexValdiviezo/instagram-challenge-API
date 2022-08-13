const { Schema, model } = require('mongoose');

const publicItems = Schema({
    imagen: {
        type: String,
        required: [true, 'La imagen es obligatoria'], //Requerido
    },
    titulo: {
        type: String,
        required: [false, 'El titulo es obligatorio'], //Requerido
    },
    likes: {
        type: Number,
        required: [true, 'Los likes son obligatorios'], //Requerido
    }
});

publicItems.methods.toJSON = function(){
    const{__v, _id, ...public} = this.toObject();
    public.uid = _id;
    return public;
}

module.exports = model( 'PublicItem', publicItems);