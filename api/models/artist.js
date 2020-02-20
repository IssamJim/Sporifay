'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtistSchema = Schema({
    name: String,
    description: String,   
    image: String    
});
//modelos son representaciones de instancias en una base de datos

module.exports = mongoose.model('Artist', ArtistSchema);