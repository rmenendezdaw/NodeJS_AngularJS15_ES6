var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');
var User = mongoose.model('User');

var CompanySchema = new mongoose.Schema({
  slug: {type: String, lowercase: true, unique: true},
  title: String,
  platform: String, 
  description: String,
  favoritesCount: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  tagList: [{ type: String }],
}, {timestamps: true});
// console.log(CompanySchema)
CompanySchema.plugin(uniqueValidator, {message: 'is already taken'});

CompanySchema.pre('validate', function(next){
  if(!this.slug)  {
    this.slugify();
  }

  next();
});

CompanySchema.methods.slugify = function() {
  this.slug = slug(this.title) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);

};

CompanySchema.methods.updateFavoriteCount = function() {
  var company = this;

  return User.count({favorites: {$in: [company._id]}}).then(function(count){
    company.favoritesCount = count;

    return company.save();
  });
};
CompanySchema.methods.toJSONFor = function(user){
  return {
    slug: this.slug,
    title: this.title,
    platform: this.platform,
    description: this.description,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    tagList: this.tagList,
    favorited: user ? user.isFavorite(this._id) : false,
    favoritesCount: this.favoritesCount,
  };
};
mongoose.model('Company', CompanySchema);