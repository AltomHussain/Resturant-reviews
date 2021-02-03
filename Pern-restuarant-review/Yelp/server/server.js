const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db");
require("dotenv").config();
const app = express();
app.use(cors());
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
app.get("/api/restaurants", async (req, res) => {
  try {
    const results = await db.query("select  * from restaurants");
    res.status(200).json({
      status: "success",
      total: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
});

//retrieve one restaurant
app.get("/api/restaurants/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await db.query(
      "select * from restaurants where id= $1",
      [id]
    );

    const review = await db.query("select * from reviews where restaurant_id= $1", [id]);
console.log(review.rows);
    if (restaurant.rows.length) {
      res.json({
        status: "success",
        total: restaurant.rows.length,
        data: {
          restaurants: restaurant.rows,
          reviews: review.rows,
        },
      });
    } else {
      res.status(404).json(`There is no restaurant with that id: ${id}`);
    }

    console.log();
  } catch (error) {
    console.log(error.message);
  }
});

//create
app.post("/api/restaurants", async (req, res) => {
  try {
    const { name, location, price_range } = req.body;
    const results = await db.query(
      "insert into restaurants (name, location, price_range) values($1, $2, $3) returning *",
      [name, location, price_range]
    );
    if (name !== "" && location !== "" && price_range !== "") {
      res.status(201).json({
        status: "success",
        total: results.rows.length,
        data: {
          restaurants: results.rows[0],
        },
      });
    } else {
      res.status(401).json("Missing Credential");
    }
  } catch (error) {
    console.log(error.message);
  }
});

//update
app.put("/api/restaurants/:id/update", async (req, res) => {
  const { id } = req.params;
  console.log("update");
  const { name, location, price_range } = req.body;
  try {
    const results = await db.query(
      "update restaurants set name=$1,location=$2, price_range=$3 where id=$4 returning *",
      [name, location, price_range, id]
    );

    if (results.rows.length) {
      res.status(200).json({
        status: "success",
        data: {
          results: results.rows[0],
        },
      });
    } else {
      res.status(404).json(`Row with the id: ${id} does not exist`);
    }
  } catch (error) {
    console.log(error.message);
  }
});

//delete
app.delete("/api/restaurants/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const results = await db.query(
    "delete from restaurants where id=$1 returning *",
    [id]
  );
  if (results.rows.length !== 0) {
    res.status(200).json({
      status: "success",
      data: `The row with id: ${id} has been deleted :)`,
    });
  } else {
    res.status(404).json(`The row with id: ${id} does not exist`);
  }
});

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
