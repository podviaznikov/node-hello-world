var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello Anton.....2');
});

app.listen(80);
