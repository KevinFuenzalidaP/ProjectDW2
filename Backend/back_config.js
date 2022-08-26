class EnvConfiguration {
    
    constructor(ambiente_prod = false) {
        this.NEW_SERVER       = false;
        this.PRODUCTION = ambiente_prod;
    }

    getInfo(){
        var information = {
            NEWSERVER : this.NEW_SERVER,
            PRODUCTION : this.PRODUCTION
        }
        return information;

    }
}

module.exports = EnvConfiguration;