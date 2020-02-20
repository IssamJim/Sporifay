'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    role: String,
    image: String    
});
//modelos son representaciones de instancias en una base de datos

module.exports = mongoose.model('User', UserSchema);