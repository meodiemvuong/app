const User = require('./../models/userModel')
const jwt = require('jsonwebtoken')
const sendToken = require('./../utils/sendToken');
const sendEmail = require('../utils/sendEmail');

exports.registerUser = async (req, res, next) => {
    const {name, email, gender, password } = req.body;
    if(!email || !password ){
        res.json({error: 'Please enter email and password'})
        return Error('400')
    }
    const user = await User.create({
        name, email, gender, password
    })
    try {
        await sendEmail({
            email: user.email,
            message: `<p>Hello ${user.name}, Welcome to my Website</p>`
        })
        console.log("SendEmail success")
    } catch (error) {
        console.log(error)
    }
    console.log(user)
    sendToken(user, 201, res)

}

exports.loginUser = async (req, res, next) => {
    const {email, password} = req.body;
    if(!email || !password){ 
        res.json({error: 'Please enter email and password'})
        return Error('400')
    }
    const user = await User.findOne({email}).select('+password')
    const isLogin = await user.comparsePassword(password)
    if(!isLogin){
        res.json({error: 'Invaild Email or Password'})
        return Error()
    } 
    sendToken(user, 201, res)
}

exports.logoutUser = async (req, res, next)=>{
    res.cookie('token', null)
    res.json({
        message: 'Longged Out'
    })
}

exports.getUserDetail = async(req, res, next) => {
    const user = await User.findById(req.user._id)
    res.json({
        user,
    })
}