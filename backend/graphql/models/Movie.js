var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');
var User = mongoose.model('User');

var MovieSchema = new mongoose.Schema({
  slug: {type: String, lowercase: true, unique: true},
  title: String,
  description: String,
  price: String,
  category: String, 
  body: String,
  duration: String,
  favoritesCount: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  tagList: [{ type: String }],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {timestamps: true});
// console.log(MovieSchema)
MovieSchema.plugin(uniqueValidator, {message: 'is already taken'});

MovieSchema.pre('validate', function(next){
  if(!this.slug)  {
    this.slugify();
  }

  next();
});

MovieSchema.methods.slugify = function() {
  this.slug = slug(this.title) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
};

MovieSchema.methods.updateFavoriteCount = function() {
  var movie = this;

  return User.count({favorites: {$in: [movie._id]}}).then(function(count){
    movie.favoritesCount = count;

    return movie.save();
  });
};

MovieSchema.methods.toJSONFor = function(user){
  return {
    slug: this.slug,
    title: this.title,
    description: this.description,
    body: this.body,
    price: this.price,
    category: this.category,
    duration: this.duration,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    tagList: this.tagList,
    favorited: user ? user.isFavorite(this._id) : false,
    favoritesCount: this.favoritesCount,
    author: this.author.toProfileJSONFor(user)
  };
};
mongoose.model('Movie', MovieSchema);