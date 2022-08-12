const mongoose = require('mongoose');
const PublicItem = require('../models/public-items');


const dbConnection = async() => {
    /*
        Como no tenemos control total sobre la base de datos, siempre es bueno realizar la conexion
        dentro de un try and catch. Porque puede fallar.
    */
    try {

        await mongoose.connect(process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Base de datos Online');

        const publics = await PublicItem.find({});
        
        if(publics.length<3){
            for(let i=0; i<3; i++){
                if(!publics[i]){
                    const public = new PublicItem({
                        imagen:"http://i.imgur.com/9L45pJG.jpg",
                        titulo:"default",
                        likes:0
                    })
                    public.save();
                }
            }
        }

    } catch (error) {

        console.log(error);
        throw new Error('Error al iniciar la base de datos');

    }
}

module.exports = {
    dbConnection
}