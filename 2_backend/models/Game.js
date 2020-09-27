var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');
var User = mongoose.model('User');

var GameSchema = new mongoose.Schema({
  slug: {type: String, lowercase: true, unique: true},
  title: String,
  description: String,
  price: String, 
  body: String,
  favoritesCount: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  tagList: [{ type: String }],
  // author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {timestamps: true});
// console.log(GameSchema)
GameSchema.plugin(uniqueValidator, {message: 'is already taken'});

GameSchema.pre('validate', function(next){
  if(!this.slug)  {
    this.slugify();
  }

  next();
});

GameSchema.methods.slugify = function() {
  this.slug = slug(this.title) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
};

GameSchema.methods.updateFavoriteCount = function() {
  var game = this;

  return User.count({favorites: {$in: [game._id]}}).then(function(count){
    game.favoritesCount = count;

    return game.save();
  });
};

GameSchema.methods.toJSONFor = function(user){
  return {
    slug: this.slug,
    title: this.title,
    description: this.description,
    body: this.body,
    price: this.price,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    tagList: this.tagList,
    favorited: user ? user.isFavorite(this._id) : false,
    favoritesCount: this.favoritesCount
    // author: this.author.toProfileJSONFor(user)
  };
};
mongoose.model('Game', GameSchema);