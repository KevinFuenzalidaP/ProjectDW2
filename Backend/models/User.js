'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var UserSchema = Schema({
    name        :   String,
    birthday    :   Date,
    rut         :   { type: String, required: true, index: { unique: true } },
    password    :   { type: String, required: true },
    institution :   String,
    last_access :   { type : Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);