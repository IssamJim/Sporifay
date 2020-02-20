'use strict' //nuevas funciones del standar de javascript

var mongoose = require('mongoose');//para cargar libreria o modulo
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/curso_mean2', { useNewUrlParser: true }, (err, res) => {
    if (err){
        throw err;
    }else{
        console.log("La conexion a la base de datos es correcta.");
        
        app.listen(port, function(){
            console.log("Servidor del api rest de musica escuchando en http://localhost: "+port);
        })
    }
});
//creamos conexion a la base de datos, la cual nos informa si es correcta o no.
//npm start