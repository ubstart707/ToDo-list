var express = require('express');
var app = express();

app.get('/[a-zA-Z]*\.html$/', function(request, response){
    response.send(request.url);
    response.end();
});

app.listen(8080, function(){
    console.log('server start on port 8080');
})