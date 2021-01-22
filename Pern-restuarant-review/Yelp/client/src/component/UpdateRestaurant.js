import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateRestaurant(props) {
  const { id } = useParams();
  const [name, setName] = useState("")
  const [location, setLocation] = useState("");
  const [priceRAnge, setPriceRange] = useState()
const handleUpdate = async()=>{
try {
    
} catch (error) {
    console.log(error.message);
}
}



  return (
    <div>
      <h1 className="text-center">Update Restaurant</h1>
      <form action="" onSubmit={handleUpdate}>
        <lable htmlfor="name">Name</lable>
        <input id="name" type="text" className="form-control" placeholder="Name" />
        <lable htmlfor="location">Location</lable>
        <input id="location" type="text" className="form-control" placeholder="Location" />
        <lable htmlfor="price_range">Price Range</lable>
        <input id="price_range" type="number" className="form-control" placeholder="Price Range" />
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
}
