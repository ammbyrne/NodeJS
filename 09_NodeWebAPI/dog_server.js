var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dogs');

app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({extended:true, limit: '20mb'}));

var dogRoutes = require('./routes/dog.js')(app);

var server = app.listen(3001, function () {
    console.log('Server running at http://127.0.0.1:3001/');
});
