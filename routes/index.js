var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',author: 'Diana Ivonne', appName: 'WebApp', company: 'Awsom Software' });
});


/* Agregando nueva ruta */
router.get('/greeting', function(req, res, next) {
  res.status(200).json({message: 'Hola campeon'})
})

router.get('/diana', function(req, res, next) {
  res.send('Hola Diana')
})

module.exports = router;
