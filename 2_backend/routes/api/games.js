var router = require('express').Router();
var mongoose = require('mongoose');
var Game = mongoose.model('Game');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');
var auth = require('../auth');

// Preload game objects on routes with ':game'
router.param('game', function(req, res, next, slug) {
  Game.findOne({ slug: slug})
    .populate('author')
    .then(function (game) {
      if (!game) { return res.sendStatus(404); }

      req.game = game;

      return next();
    }).catch(next);
});

router.param('comment', function(req, res, next, id) {
  Comment.findById(id).then(function(comment){
    if(!comment) { return res.sendStatus(404); }

    req.comment = comment;

    return next();
  }).catch(next);
});

router.get('/', auth.optional, function(req, res, next) {
  var query = {};
  var limit = 20;
  var offset = 0;

  if(typeof req.query.limit !== 'undefined'){
    limit = req.query.limit;
  }

  if(typeof req.query.offset !== 'undefined'){
    offset = req.query.offset;
  }

  if( typeof req.query.tag !== 'undefined' ){
    query.tagList = {"$in" : [req.query.tag]};
  }

  Promise.all([
    req.query.author ? User.findOne({username: req.query.author}) : null,
    req.query.favorited ? User.findOne({username: req.query.favorited}) : null
  ]).then(function(results){
    var author = results[0];
    var favoriter = results[1];

    if(author){
      query.author = author._id;
    }

    if(favoriter){
      query._id = {$in: favoriter.favorites};
    } else if(req.query.favorited){
      query._id = {$in: []};
    }

    return Promise.all([
      Game.find(query)
        .limit(Number(limit))
        .skip(Number(offset))
        .sort({createdAt: 'desc'})
        .populate('author')
        .exec(),
      Game.count(query).exec(),
      req.payload ? User.findById(req.payload.id) : null,
    ]).then(function(results){
      var games = results[0];
      var gamesCount = results[1];
      var user = results[2];

      return res.json({
        games: games.map(function(game){
          return game.toJSONFor(user);
        }),
        gamesCount: gamesCount
      });
    });
  }).catch(next);
});

router.get('/feed', auth.required, function(req, res, next) {
  var limit = 20;
  var offset = 0;

  if(typeof req.query.limit !== 'undefined'){
    limit = req.query.limit;
  }

  if(typeof req.query.offset !== 'undefined'){
    offset = req.query.offset;
  }

  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    Promise.all([
      Game.find({ author: {$in: user.following}})
        .limit(Number(limit))
        .skip(Number(offset))
        .populate('author')
        .exec(),
      Game.count({ author: {$in: user.following}})
    ]).then(function(results){
      var games = results[0];
      var gamesCount = results[1];

      return res.json({
        games: games.map(function(game){
          return game.toJSONFor(user);
        }),
        gamesCount: gamesCount
      });
    }).catch(next);
  });
});

router.post('/', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    var game = new Game(req.body.game);

    game.author = user;

    return game.save().then(function(){
      console.log(game.author);
      return res.json({game: game.toJSONFor(user)});
    });
  }).catch(next);
});

// return a game
router.get('/:game', auth.optional, function(req, res, next) {
  Promise.all([
    req.payload ? User.findById(req.payload.id) : null,
    req.game.populate('author').execPopulate()
  ]).then(function(results){
    var user = results[0];

    return res.json({game: req.game.toJSONFor(user)});
  }).catch(next);
});

// update game
router.put('/:game', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if(req.game.author._id.toString() === req.payload.id.toString()){
      if(typeof req.body.game.title !== 'undefined'){
        req.game.title = req.body.game.title;
      }

      if(typeof req.body.game.description !== 'undefined'){
        req.game.description = req.body.game.description;
      }
      
      if(typeof req.body.game.body !== 'undefined'){
        req.game.body = req.body.game.body;
      }
      if(typeof req.body.game.price !== 'undefined'){
        req.game.price = req.body.game.price;
      }
      if(typeof req.body.game.tagList !== 'undefined'){
        req.game.tagList = req.body.game.tagList
      }

      req.game.save().then(function(game){
        return res.json({game: game.toJSONFor(user)});
      }).catch(next);
    } else {
      return res.sendStatus(403);
    }
  });
});

// delete game
router.delete('/:game', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    if(req.game.author._id.toString() === req.payload.id.toString()){
      return req.game.remove().then(function(){
        return res.sendStatus(204);
      });
    } else {
      return res.sendStatus(403);
    }
  }).catch(next);
});

// Favorite an game
router.post('/:game/favorite', auth.required, function(req, res, next) {
  var gameId = req.game._id;

  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    return user.favorite(gameId).then(function(){
      return req.game.updateFavoriteCount().then(function(game){
        return res.json({game: game.toJSONFor(user)});
      });
    });
  }).catch(next);
});

// Unfavorite an game
router.delete('/:game/favorite', auth.required, function(req, res, next) {
  var gameId = req.game._id;

  User.findById(req.payload.id).then(function (user){
    if (!user) { return res.sendStatus(401); }

    return user.unfavorite(gameId).then(function(){
      return req.game.updateFavoriteCount().then(function(game){
        return res.json({game: game.toJSONFor(user)});
      });
    });
  }).catch(next);
});

// return an game's comments
router.get('/:game/comments', auth.optional, function(req, res, next){
  Promise.resolve(req.payload ? User.findById(req.payload.id) : null).then(function(user){
    return req.game.populate({
      path: 'comments',
      populate: {
        path: 'author'
      },
      options: {
        sort: {
          createdAt: 'desc'
        }
      }
    }).execPopulate().then(function(game) {
      return res.json({comments: req.game.comments.map(function(comment){
        return comment.toJSONFor(user);
      })});
    });
  }).catch(next);
});

// create a new comment
router.post('/:game/comments', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }

    var comment = new Comment(req.body.comment);
    comment.game = req.game;
    comment.author = user;

    return comment.save().then(function(){
      req.game.comments.push(comment);

      return req.game.save().then(function(game) {
        res.json({comment: comment.toJSONFor(user)});
      });
    });
  }).catch(next);
});

router.delete('/:game/comments/:comment', auth.required, function(req, res, next) {
  if(req.comment.author.toString() === req.payload.id.toString()){
    req.game.comments.remove(req.comment._id);
    req.game.save()
      .then(Comment.find({_id: req.comment._id}).remove().exec())
      .then(function(){
        res.sendStatus(204);
      });
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
