const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(path.join(__dirname, 'docs')));

const PORT = process.env.PORT || 5000; // This is for heroku

var server = app.listen(PORT,function(){
    console.log('Server listening at:', server.address().port);
});