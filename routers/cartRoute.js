const express = require('express')
const { getCart, addToCart } = require('../controllers/cartController')
const { isAuthentication } = require('../utils/auth')

const router = express.Router()

router.route('/cart').get(isAuthentication, getCart)
router.route('/cart/add').post(isAuthentication, addToCart)
module.exports = router