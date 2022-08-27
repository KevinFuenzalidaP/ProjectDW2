const { execSync } = require('child_process');
const EnvConfiguration = require("../back_config");

//Comando para Extraer datos del servel - servirá como autocompletar datos de un formulario segun el rut
class ServelServices {

    constructor(ruta_python, ruta_venv) {
        this.PATH_PYTHON = ruta_python;
        this.PATH_PYTHON_VENV = ruta_venv;
    }

    getData(rut) {
        try {

            let Config = new EnvConfiguration();
            let infoServer = Config.getInfo();
            if (infoServer.NEWSERVER) {
                console.info("Actualizando Paquetes de Python...");
                execSync(this.PATH_PYTHON_VENV + 'activate && pip install -r ' + this.PATH_PYTHON + 'requirements.txt', { encoding: 'utf-8' });
            }

            const data_servel = execSync(this.PATH_PYTHON_VENV + 'activate && ' + this.PATH_PYTHON + 'rutificador.py ' + rut, { encoding: 'utf-8' });
            console.log(data_servel.toString());
            const servel = JSON.parse(data_servel.toString());
            if (typeof servel.nombre !== 'undefined') {
                return servel;
            } else {
                console.error('Error: ' + output.toString());
                return {};
            }
        } catch (err) {
            console.error('SERVEL: No se encuentran registros');
            console.error(err);
            return {};
        }
    }
}

module.exports = ServelServices;