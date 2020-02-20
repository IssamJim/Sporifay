'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = Schema({
    title: String,
    description: String,
    year: Number,
    image: String,    
    artist: {type: Schema.ObjectId, ref: 'Artist'}
});
//modelos son representaciones de instancias en una base de datos

module.exports = mongoose.model('Album', AlbumSchema);