var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('dt'+JSON.parse(req.body))
  res.send('respond with a resource');
});

module.exports = router;