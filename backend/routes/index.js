var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/express1', function(req, res, next) {
  res.status(200).send({body: 'Express1'});
});


router.get('/express2', function(req, res, next) {
  res.status(200).send('Express2');
});

router.get('/coverage', function(req, res, next) {
  res.status(200).send({body: global.__coverage__});
});

module.exports = router;
