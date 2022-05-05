const express = require('express')
const app = require('./app')
app.use(express.json())
const connectDatabase = require('./config/database')

connectDatabase();

const server = app.listen(3000, ()=>{
  console.log('Server is running on Port: 3000')
} )

// const user_schema = new mongoose.Schema({
//   'username': {type: String, unique: true, required: true},
//   'password': {type: String}
// })
// const User = mongoose.model('user', user_schema)
// app.get('/user',async (req, res)=>{
//   try {
//     const admin = await User.find()
//     res.send(admin)
//   } catch (error) {
//     console.log(error)
//   }
// })

// app.post('/user', async(req, res) => {
//   const user = new User(req.body);
//   try {
//     const save_user = await user.save();
//     res.status(200).json(save_user);
//   } catch (error) {
//     console.log(error)
//   }
  
// })