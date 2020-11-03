let mongoose = require('mongoose');
var User = mongoose.model('User');



let addUser = async function(values) {
    try{
    var user = new User();
    user.username = values.username;
    user.email = values.email;
    user.setPassword(values.password);
    user.idsocial = values.email;

       await user.save();
    return user;
    } catch(e) {
          return e;
    }
}

exports.createTest = async function() {
    let user = await User.findOne({ username: 'test' });
    // console.log(user);
    if (!user) {
        user = await addUser({ 
            username: 'test',
            email: 'test@gmail.com',
            password: 'test1234',
            idsocial: 'test@gmail.com'
         });
    }// end_if

    return user;
}

exports.updateKarma = async (id, qty) => {

    let user = await User.findById(id);

    if (user){
        user = await User.findOneAndUpdate(
            { _id: user.id}, 
            { $inc: { karma: qty } },
            { "fields": { karma: 1 }, new: true });
            
        if (user.karma < 0){
            user.karma = 0;
            await user.save();
        }
    }
}