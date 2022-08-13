const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.apiRoutePath = '/api'
        this.uploadRoutePath = '/upload'

        // Conectar a base de datos

        this.conectarDB();

        //Middlewares

        this.middlewares();

        //Rutas de mi aplicación

        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){

        //cors
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use( express.json() ); //Serializa la información a formato json

    }

    routes(){
        //Rutas
        this.app.use(this.apiRoutePath, require('../routes/public-items.js'));
        this.app.use(this.uploadRoutePath, require('../routes/upload.js'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando en el puerto ${this.port}`)
        });
    }

}
module.exports = Server