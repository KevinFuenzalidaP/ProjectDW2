'use strict'


const mongoose = require('mongoose');
const app = require('./app')
const port = 3900
const url = 'mongodb://admin:qwe123@54.91.99.144:27017/';
const options = { useNewUrlParser : true };

//Como instanciar Helper de Servel
const ServelServices = require('./third-party/ServelServices');
let servel_instance = new ServelServices('.\\third-party\\servel_services\\', '.\\third-party\\servel_services\\Scripts\\');
let consulta = servel_instance.getData('19746549-2');
console.log(consulta);


//Connect To Database:
mongoose.Promise = global.Promise;
mongoose.connect(url, options).then(()=> {
    //Crear servidor:
    console.log('Conexion Exitosa...');
    app.listen(port, ()=>{
        console.log("Servidor corriendo en http://localhost:"+port);
    });
});