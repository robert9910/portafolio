var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('workshopdb', ['users']);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET login page: Codigo añadido por Juan Gomez */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Sign up' });
});

/* GET register page: Codigo añadido por Juan Gomez */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

/* POST login page: Codigo añadido por Juan Gomez */
router.post('/logindata', function(req, res) {
  var data = [];
  var query = {username: req.body.username, password: req.body.password}
  db.users.findOne(query, function(err, data) {
    if (err || !data)
        res.send('Incorrect login for username = "' + req.body.username + '" and password = "' + req.body.password + '"');
    else 
        res.render('logindata', { // TODO: Reutilizar la vista de login y ocultar la seccion del formulario para mostrar la otra
            title: 'User login successfully',
            username: data.username,
            password: data.password
        });
  });
});

/* POST register page: Codigo añadido por Juan Gomez */
router.post('/registerdata', function(req, res) {
  var data = [];
  db.users.insert(req.body, function(err, data) {
    if (err || !data)
        res.send('The username "' + data.username +'" cannot be created');
    else
        res.render('registerdata', { // TODO: Reutilizar la vista de register y ocultar la seccion del formulario para mostrar la otra
            title: 'The user was created successfully',
            email: data.email,
            username: data.username,
            password: data.password,
            gender: data.gender,
            address: data.address,
        });
  });
});

module.exports = router;
