const express = require('express')
const {registerUser, loginUser, logoutUser, getUserDetail} = require('./../controllers/userController')
const {isAuthentication} = require('../utils/auth')
const router = express.Router();

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logoutUser)
router.route('/me').get(isAuthentication, getUserDetail)

module.exports = router