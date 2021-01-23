import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
//Where ever you use the useContext you to bring RestaurantContex with used createContex
export default function UpdateRestaurant(props) {
   
    let history = useHistory()
  const { id } = useParams();
  const [name, setName] = useState("")
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("")
  
  //get one restaurant by id and put them into the input fields so you can update them
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

    const handleUpdate = async(e)=>{
        e.preventDefault();
    try {
   await RestaurantFinder.put(`/${id}/update`,{
        name,
        location,
         price_range: priceRange
    });
    history.push(("/"))      
    } catch (error) {
        console.log(error.message);
    }
    }
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
