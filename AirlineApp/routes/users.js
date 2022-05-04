var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
 res.send(Objects.keys(req.body).length)

  //res.send(req.body.leavecity)
  res.send('respond with a resource');
});

module.exports = router;
