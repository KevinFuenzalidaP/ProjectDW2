'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var SignerSchema = Schema({
    rut         :   String,
    id_document :   String,
    state       :   String,
    audit       :   String,
    institution :   String,
    type_sign   :   String,
    order       :   String,
    date_sign   :   { type : Date, default: Date.now }
});

module.exports = mongoose.model('Signer', SignerSchema);