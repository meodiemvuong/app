const Cart = require('../models/cartModel')
const Product = require('../models/productModel')
exports.getCart = async (req, res, next) => {
    let cart = await Cart.findOne({user: req.user._id})
    console.log(cart)
    if(!cart){
        cart = await Cart.create({
            user: req.user._id,
            items: []
        })
    }
    res.json({
        cart
    })
    next()
}

exports.addToCart = async(req, res, next) => {
    const { productId, quantity } = req.body
    const product = await Product.findOne({_id: productId})
    const cart = await Cart.findOne({user: req.user._id})
    const indexFound = cart.items.findIndex(item => item.productId == productId)
    // Xoa product khi quantity <=0
    if (indexFound !== -1 && quantity <= 0) {
        cart.items.splice(indexFound, 1);
        if (cart.items.length == 0) {
            cart.totalPrice = 0;
        } else {
            cart.totalPrice = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
        }
    }
    // da co products
    else if (indexFound !== -1) {
        cart.items[indexFound].quantity = cart.items[indexFound].quantity + quantity;
        cart.items[indexFound].total = cart.items[indexFound].quantity * product.price;
        cart.items[indexFound].price = product.price
        cart.totalPrice = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
    }
    // chua co products
    else if (quantity > 0) {
        cart.items.push({
            productId: productId,
            quantity: quantity,
            price: product.price,
            total: product.price * quantity
        })
        cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
    }
    let data = await cart.save();
    res.json({
        cart
    })
}