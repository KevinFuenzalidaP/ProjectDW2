'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var DocumentSchema = Schema({
    title       :   String,
    tags        :   String,
    pdf         :   String,
    create_by   :   String,
    institution :   String,
    date        :   { type : Date, default: Date.now }
});

module.exports = mongoose.model('Document', DocumentSchema);