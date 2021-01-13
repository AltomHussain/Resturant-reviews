const express = require("express");
require("dotenv").config();
const app = express();


//retrieve
app.get("/restaurants", (req, res)=>{
console.log("restaurant");
res.json("hello there")
})
//create
app.post("/restaurants", (req, res)=>{
    
})

//update
app.put("/restaurants", (req, res)=>{

})


//delete
app.delete("/restaurants", (req, res)=>{

})



const port = process.env.PORT ||4001;
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})