const express = require('express');
const app = express() ;
 app.get("/" , (req , res ) => {
    console.log("hey") ;
    res.send("hey")

 }) ;

 app.listen(3000) ;