let mongoose = require('mongoose');
let User = mongoose.model('User');


exports.SearchUser = async (email) => {
    let user = await User.findOne(email);
    return user;
}