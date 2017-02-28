var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello Anton.....6');
});

app.listen(80);
