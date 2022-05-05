const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

exports.isAuthentication = async(req, res, next) => {
    const {token} = req.cookies;
    if(!token){
        res.json({
            message: "Please login"
        })
        return Error();
    }
    const decodedData = jwt.verify(token, process.env.SECRET_KEY)
    req.user = await User.findById(decodedData.id)
    next()
}