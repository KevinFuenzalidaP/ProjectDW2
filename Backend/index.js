'use strict'


const mongoose = require('mongoose');
const app = require('./app')
const port = 3900
const url = 'mongodb://admin:qwe123@54.91.99.144:27017/' ;
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