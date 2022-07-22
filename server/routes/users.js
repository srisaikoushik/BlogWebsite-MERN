var express = require('express');
var router = express.Router();
var {registerUser,loginUser,logoutUser} = require('../controllers/usercontroller');

/* GET users listing. */
router.post('/signup',registerUser);
router.post('/login',loginUser);
router.get('/logout',logoutUser);

module.exports = router;
