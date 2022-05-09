const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    images: [
        {
            public_id: {
                type: String,
                required: false
            },
            url: {
                type: String,
                required: false
            }
        }
    ],
    ratings: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: false
            },
            name: {
                type: String,
                required: false
            },
            rating: {
                type: Number,
                enum: [1,2,3,4,5],
                required: false
            },
            comment: {
                type: String,
                required: false
            }
        }
    ]
    
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)