const http = require('http')
const fs = require('fs')
const port = 3000;
const express = require('express');
var path = require('path');

//Init express
const app = express();

app.get('/', function(req, res) {
    console.log("THIS IS THE DIRECTORY: " + __dirname);
        res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/img', express.static(path.join(__dirname, 'img')))
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/vendor', express.static(path.join(__dirname, 'vendor')))
app.use('/css', express.static(path.join(__dirname, 'css')))

app.listen(port, () => console.log('You are now listening to the greatest... port ' + port));

