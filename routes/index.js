var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(_, res, _) {
  res.render('index', { title: 'Home Page' });
});

/* GET About Me page. */
router.get('/about', function(_, res, _) {
  res.render('about_me', { title: 'About Me Page' });
});

/* GET Projects page. */
router.get('/project', function(_, res, _) {
  res.render('project', { title: 'Project Page' });
});

/* GET Contact Me page. */
router.get('/contact', function(_, res, _) {
  res.render('contact', { title: 'Contact Page' });
});

module.exports = router;
