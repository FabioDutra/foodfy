const express = require('express');
const routes = express.Router();
const data = require('./data');

routes.get('/', function (req, res) {
  return res.render('home', { items: data });
});

routes.get('/about', function (req, res) {
  return res.render('about');
});

routes.get('/recipes', function (req, res) {
  return res.render('recipes', { recipes: data });
});

routes.get('/descriptions', function (req, res) {
  return res.render('descriptions', { recipes: data });
});

routes.use(function (req, res) {
  res.status(404).render('not-found');
});

module.exports = routes;
