'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var SignerTypeSchema = Schema({
    id_doctype  :   String,
    role_signer :   String,
    type_sign   :   String,
    order       :   String,
    date_sign   :   { type : Date, default: Date.now }
});

module.exports = mongoose.model('SignerType', SignerTypeSchema);