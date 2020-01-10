var express = require('express');
var app = express();

var port = 8080;

app.all('*', function(req, res){
    console.log('method: ' + req.method)

    console.log('query: ' + req.query)

    console.log('protocol: ' + req.protocol)

    console.log('securte: ' + req.securte)

    console.log('accepts: ' + req.accepts(['text/html', 'aplication/json']))

    console.log('content type header: '+ req.get('Content-Type'));

    console.log('------------');
    res.end();
});

app.listen(8080, function(){
    console.log('server start on port 8080');
})