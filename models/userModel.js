const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false
    },
    avatar: {
        public_id: {
            type: String
        },
        url: {
            type: String,
        }
    },
    role: {
        type: String,
        default: 'user'
    },
    resetPasswordToken: {
        type: String
    },
},{
    timestamps: true
}
)

userSchema.pre('save', async function (next){
    if (! this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.getJWTToken = function (){
    return jwt.sign({id: this._id}, process.env.SECRET_KEY)
}

userSchema.methods.comparsePassword = async function (password){
    return await bcrypt.compare(password, this.password)
}


module.exports = mongoose.model('User', userSchema)