var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.sendFile('search-form.html', {
  root: 'views/'
})
});

module.exports = router;
