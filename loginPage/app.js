const express = require('express');
const app = express() ;
const usermodel = require('./models/user');
const path= require('path');
const cookieParser = require('cookie-parser');


app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.urlencoded({extended=true}));
app.use(express.static(path.join(_dirnmae , "public")));
app.use(cookieParser());
 




app.get("/" , (req , res ) => {
        res.render("index.ejs") ;
})
app.get("/register" , (req,res)=>{
        res.render("registerpage");
})
app.post("/create" , (res,req)=>{
        const {username  , email , password , age} = req.body 
})



app.listen(3001);