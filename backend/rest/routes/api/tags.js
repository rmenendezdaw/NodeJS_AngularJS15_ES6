var router = require('express').Router();
var mongoose = require('mongoose');
var Game = mongoose.model('Game');

// return a list of tags
router.get('/', function(req, res, next) {
  Game.find().distinct('tagList').then(function(tags){
    return res.json({tags: tags});
  }).catch(next);
});

module.exports = router;
