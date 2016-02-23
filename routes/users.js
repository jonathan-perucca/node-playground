var express = require('express');
var userRepository = require('../repositories/config').userRepository;
var router = express.Router();

router.get('/', function(request, response, next) {
    function sendResponse(users) {
        response.send(users);
    }

    Promise.resolve(userRepository.findAll())
           .then(sendResponse);

    next();
});

module.exports = router;
