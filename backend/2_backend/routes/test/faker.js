var router = require('express').Router();
const faker = require('faker')
const mongoose = require('mongoose')
let utils = require('../../utils/users.utils');
let Game = mongoose.model('Game');
let User = mongoose.model('User');

// router.post('/users/:qty', async function(req, res, next) {
//     try {
//         for (let i = 0; i < req.params.qty; i++) {
//             var user = await new User();

// 			user.username = faker.internet.userName();
//             user.email = faker.internet.email();
//             user.setPassword("12345678");
//             user.idsocial = user.username+"#"+faker.random.number();
//             user.image = faker.internet.avatar();

// 			var ok = await User.find( { $or:[ {'username':user.username}, {'idsocial':user.idsocial}]});
//             if(!ok[0]){
//                 // console.log(user);
//                 await user.save();
// 			}
// 			return res.sendStatus(200); 
//         }
//     } catch (e) {
// 		console.log("error users")
// 		next(e)
//     }
// });
// Fake Games
router.post('/games/:qty', async (req, res) => {
	try {
		var email = email;
		var user = await utils.createTest();

		for (let i = 0; i < req.params.qty; i++) {
			var game = new Game();
			game.title = faker.lorem.words(),
				console.log(game.title)
			game.description = faker.lorem.sentence(),
			game.body = faker.lorem.sentence();
			game.price = faker.random.number();
			game.category = faker.lorem.word();
			game.tagList = ["fake", "test"];
			game.author = user._id;

			await game.save();
		}
	} catch (e) {
		console.log("error games")
	}
	return res.json({ res: 'games added.' });

})

module.exports = router;