const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const home = require('./data');

server.use(express.urlencoded({ extended: true}))
server.use(express.static('public'));


server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
});

//Routes
server.get('/', function (req, res) {
  return res.render('home', {items: home});
});

server.get('/about', function (req, res) {
  return res.render('about');
});

server.get('/recipes', function (req, res) {
  return res.render('recipes');
});



// end Routes

server.use(function (req, res) {
  res.status(404).render('not-found');
});

server.listen(5000, function () {
  console.log('Server is running');
});
