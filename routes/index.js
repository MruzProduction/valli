var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Коржика*/
router.get('/valli', function(req, res, next) {
  res.send("<h1>Страница Валли</h1>")
  });

  /* Страница Карамельки */
router.get('/eva', function(req, res, next) {
  res.send("<h1>Страница Валли</h1>")
  });

  /* Страница Компота */
  router.get('/kapitan', function(req, res, next) {
  res.send("<h1>Страница Капитан</h1>")
  });

module.exports = router;
