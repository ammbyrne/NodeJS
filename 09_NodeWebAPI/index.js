var express = require('express');
var app = express();

//var bodyParser = require('body-parser');

app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({extended:true, limit: '20mb'}));

app.get('/', function(req, res) {
    res.send('Hello');
});

var server = app.listen(3000, function () {
    console.log( 'Server running at http://127.0.0.1:3000/');
});