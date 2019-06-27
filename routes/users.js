var express = require('express');
var router = express.Router();

/* GET users listing. */
//Remember callback is fired everytime GET is made
//Since we're in the users route this would be /users/
router.get('/', function(req, res, next) {
  res.send('You made a GET request for the users page');
});


module.exports = router;
