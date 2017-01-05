var express = require('express')
var router = express.Router()

// Route index page
router.get(['/', '/gov.uk', '/gov.uk/track'], function (req, res) {
  res.render('index', {
    'token': req.query.token
  });
});

// add your routes here

module.exports = router
