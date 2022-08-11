const mongoose = require('mongoose');

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

    } catch (error) {

        console.log(error);
        throw new Error('Error al iniciar la base de datos');

    }
}

module.exports = {
    dbConnection
}