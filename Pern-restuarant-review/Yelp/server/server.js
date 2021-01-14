const express = require("express");
const morgan = require("morgan");
const db = require("./db");
require("dotenv").config();
const app = express();
//req.body
app.use(express.json());
//this is a midleware
app.use((req, res, next) => {
  console.log("middleware");
  next();
});
//added morgan middleware library to use it as middleware(it return the req path every time you send req)
app.use(morgan("dev"));

//retrieve
app.get("/restaurants", async (req, res) => {
    try {
        const results = await db.query("select  * from restaurants");
        res.status(200).json({
            status: "success",
            total: results.rows.length,
            data: {
                restaurant: results.rows
            }
                });
        
    } catch (error) {
        console.log(error.message);
    }
});

//retrieve one restaurant
app.get("/restaurants/:id", async(req, res) => {
  const { id } = req.params;
try {
    const results = await db.query("select * from restaurants where id= $1", [id]);
    if(results.rows.length){
        res.json({
      status: "success",
      total: results.rows.length,
      data: {
          restaurants: results.rows[0] 
      }
  });
    }else{
        res.status(404).json(`There is no restaurant with that id: ${id}`)
    }
    
  console.log();
} catch (error) {
    console.log(error.message);
}
  
});

//create
app.post("/restaurants", (req, res) => {
  res.status(201).json({
    status: "success",
  });
});

//update
app.put("/restaurants/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    status: "success",
  });
});

//delete
app.delete("/restaurants/:id", (req, res) => {
  const { id } = req.params;
  res.status(204).json({
    status: "success",
  });
});

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
