//Comando para Extraer datos del servel - servirá como autocompletar datos de un formulario segun el rut
const { execSync } = require('child_process');

/*const PATH_PYTHON = '.\\third-party\\servel_services\\';
const PATH_PYTHON_VENV = '.\\third-party\\servel_services\\Scripts\\';*/
class ServelServices {

    constructor(ruta_python, ruta_venv) {
        this.PATH_PYTHON       = ruta_python;
        this.PATH_PYTHON_VENV  = ruta_venv;
    }

    getData(rut){
        try {
            console.log(rut);
            console.log(this.PATH_PYTHON_VENV);
            const output = execSync(this.PATH_PYTHON_VENV+'activate && py ' + this.PATH_PYTHON + 'rutificador.py ' + rut, { encoding: 'utf-8' });
            const servel = JSON.parse(output.toString());
            if (typeof servel.nombre !== 'undefined') {
                // your code here
                console.log('The output is: '+ servel.sexo);
                return servel;
            }else{
                console.error('Error: ' + output.toString());
                return {};
            }
        }catch(err){
            console.error('SERVEL: No se encuentran registros');
            return {};
        }
    }
}

module.exports = ServelServices;