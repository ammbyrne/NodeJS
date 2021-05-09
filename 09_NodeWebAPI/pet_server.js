var express = require('express');
var app = express();

app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({extended:true, limit: '20mb'}));

var petRoutes = require('./routes/pet.js')(app);

var server = app.listen(3002, function () {
    console.log('Server running at http://127.0.0.1:3002/');
});
