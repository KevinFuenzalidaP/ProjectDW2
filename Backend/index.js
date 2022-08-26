'use strict'

const mongoose = require('mongoose');
const app = require('./app')
const port = 3900
const url = 'mongodb://localhost:27017/AppMovil' ;
const options = { useNewUrlParser : true };

//Connect To Database:
mongoose.Promise = global.Promise;
mongoose.connect(url, options).then(()=> {
    //Crear servidor:
    console.log('Conexion Exitosa...');
    app.listen(port, ()=>{
        console.log("Servidor corriendo en http://localhost:"+port);
    });
});