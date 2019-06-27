const express = require('express');
const router = express.Router();


router.get('/recipes', function(req, res) {
  res.send({type: 'GET'});
});


router.post('/recipes', function(req, res) {
  res.send({type: 'POST'});
});

router.put('recipes/:id', function(req, res) {
  res.send({type: 'PUT'})
});

router.delete('recipes/:id', function(req, res) {
  res.send({type: 'DELETE'})
});


module.exports = router;
