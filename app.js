const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileUpload())

const user = require('./routers/userRoute')
const product = require('./routers/productRoute')


app.use('', user)
app.use('', product)

module.exports = app;