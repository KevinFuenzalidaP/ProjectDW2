'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var DocumentTypeSchema = Schema({
    title       :   String,
    type        :   { type : String, default: "PDF" },
    institution :   String,
    create_by   :   String,
    date        :   { type : Date, default: Date.now }
});

module.exports = mongoose.model('DocumentType', DocumentTypeSchema);