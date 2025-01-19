var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.greeting = "Hi!!!";
  res.render('index', { title: 'Express',
  counter:req.session.counter });
  });
  
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход', error: null});
  });
module.exports = router;
