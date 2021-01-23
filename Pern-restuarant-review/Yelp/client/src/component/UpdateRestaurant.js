import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantContext } from "../contentex/RestaurantContext";
//Where ever you use the useContext you to bring RestaurantContex with used createContex
export default function UpdateRestaurant(props) {
    const {restaurants}= useContext(RestaurantContext) 
  const { id } = useParams();
  const [name, setName] = useState("")
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("")
const handleUpdate = async()=>{
try {

    
} catch (error) {
    console.log(error.message);
}
}


useEffect(()=>{
  const fetchData = async()=>{
      try {
          const res = await RestaurantFinder.get(`/${id}`);
          console.log(res.data.data.restaurants);
          setName(res.data.data.restaurants.name)
          setLocation(res.data.data.restaurants.location)
          setPriceRange(res.data.data.restaurants.price_range)
      } catch (error) {
          console.log(error.message);
      }
  }
  fetchData()
}, [])
  return (
    <div>
      <h1 className="text-center">Update Restaurant</h1>
      <form action="" onSubmit={handleUpdate}>
        <lable htmlfor="name">Name</lable>
        <input id="name" type="text" className="form-control" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
        <lable htmlfor="location">Location</lable>
        <input id="location" type="text" className="form-control" placeholder="Location" value={location} onChange={(e)=>setLocation(e.target.value)}/>
        <lable htmlfor="price_range">Price Range</lable>
        <input id="price_range" type="number" className="form-control" placeholder="Price Range" value={priceRange} onChange={(e)=>setPriceRange(e.target.value)}/>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
}
