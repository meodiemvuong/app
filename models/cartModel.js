const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
        },
        quantity: {
            type: Number,
            required: false,
            min : 1
        },
        price: {
            type: Number,
            required: false,
        },
        total: {
            type: Number,
            required: false
        }
    }],
    totalPrice: {
        type: Number,
        default: 0
    },
}
)
module.exports = mongoose.model('Cart', cartSchema)
