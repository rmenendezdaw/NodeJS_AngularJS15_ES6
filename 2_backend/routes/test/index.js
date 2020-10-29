var router = require('express').Router();

    router.use('/fake', require('./faker'));

module.exports = router;