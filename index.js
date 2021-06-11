var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

// use the express-static middleware
var absolute_path = path.join(__dirname, 'dist');
console.log(absolute_path)
app.use(express.static(absolute_path));

module.exports = app;