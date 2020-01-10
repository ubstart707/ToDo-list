var express = require('express');
var app = express();

app.get('/', function(request, response){
    console.log(request.url);
    response.send('<h1>Hello bla-bla</h1>');
});

app.get('/ramazon', function(request, response){
    console.log(request.url);
    response.send('<h1>Ramazon muborak</h1>');
});

app.get('/juma', function(request, response){
    console.log(request.url);
    response.send('<h1>Juma muborak</h1>');
});

app.listen(8080);