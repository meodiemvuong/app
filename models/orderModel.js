const mongoose = require('mongoose')
const itemSchema = require('./cartModel')
const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    address: {
        city: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        }
    },
    items: [itemSchema],
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "Pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Order', orderSchema)