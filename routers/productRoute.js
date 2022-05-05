const express = require('express')
const { getProducts, createProduct, getProductDetail } = require('../controllers/productController')

const router = express.Router()

router.route('/products').get(getProducts)
router.route('/products').post(createProduct)
router.route('/products/:id').get(getProductDetail)
module.exports = router