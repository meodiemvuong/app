const mongoose = require('mongoose')

exports.itemSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min : 1
    },
    price: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true
    }
})

const cartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    items: [itemSchema],
    totalPrice: {
        type: Number,
        default: 0
    },
},
)

module.exports = mongoose.Model('Cart'. cartSchema)
