import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Express server at port 3000');
});
