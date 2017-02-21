 
var express = require('express');

var app= express();
var bodyParser= require('body-parser');

var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({

extended:true
}));

var cats=require('./cats.js')(app);

var server = app.listen(port, function(){

console.log('Server running at http://127.0.0.1:3000/');

});

