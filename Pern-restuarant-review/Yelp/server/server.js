const express = require("express");
require("dotenv").config();
const app = express();

app.use((req, res, next)=>{
    console.log("middleware");
    next();
})
//retrieve
app.get("/restaurants", (req, res)=>{
console.log("restaurant");
res.json("hello there")
})
//retrieve one restaurant
app.get("/restaurants/:id", (req, res)=>{
res.json("get one")

})
//create
app.post("/restaurants", (req, res)=>{
    res.json("post")
})

//update
app.put("/restaurants/:id", (req, res)=>{
res.json("Update")
})


//delete
app.delete("/restaurants/:id", (req, res)=>{
res.json("deleted")
})



const port = process.env.PORT ||4001;
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})