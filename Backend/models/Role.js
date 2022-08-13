'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var RoleSchema = Schema({
    title       :   String,
    institution :   String,
    create_by   :   String,
    date        :   { type : Date, default: Date.now }
});

module.exports = mongoose.model('Role', RoleSchema);