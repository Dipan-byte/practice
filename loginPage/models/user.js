const mongoose = require('mongoose') ;

mongoose.connect("mongodb://127.0.0.1.2701/loginpage");
 const userSchema =mongoose.Schema(
    username = String ,
    email = String ,
    password = String ,
    age = Number 


 ) 
 module.exports = mongoose.model('user' , userSchema );