const fetch = require('cross-fetch');

class RegistroCivil {
    constructor() {
        this.url       = 'https://5cap.dec.cl/api/v1';
        this.apikey    = '89216ac7361173ff24746ec4f2500b381260b78fdb6895';
    }

    async showData(rut, nro_serie){
        try{
            const json = await this.getData(rut, nro_serie);
            console.log(json);
            return json;
        }catch(err){
            console.log(err);
        }
        
    }
    
    getData(rut, nro_serie){
        var callData = {
            user_rut        : rut,
            serial_number   : nro_serie
        }

        return fetch(this.url+'/auth/validate_vigencia', {
            method: 'POST',
            headers: {
                'X-API-KEY': this.apikey,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(callData)
        })
        .then(response => response.json())
        .then(json => json);
    }

}
  
module.exports = RegistroCivil;