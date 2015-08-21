var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'GIVE ME YOUR EMAIL', myName: 'Luis' });
});

router.post('/submit', function(req, res, next) {
  // res.send(req.body.email);
  res.redirect('/success');
});

router.get('/success', function(req, res, next) {
  res.send('success!');
});

module.exports = router;
