import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder"
import { RestaurantContext } from "../contentex/RestaurantContext";

export default function AddRestaurant() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");
  const {addRestaurant}  = useContext(RestaurantContext)

  const handleSubmit = async(e)=>{
      e.preventDefault();
      try {
      const res = await RestaurantFinder.post("/", {
             name,
             location,
            price_range: priceRange
          })
       addRestaurant(res.data.data.restaurants)
          console.log(res.data.data.restaurants);
      } catch (error) {
          console.log(error.message);
      }

  }
  return (
    <div className="mb-b">
      <form action=""  onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col">
            <input type="text" placeholder="name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
          </div>

          <div className="col">
            <input
              type="text"
              placeholder="location"
              className="form-control"
              value={location} onChange={(e)=>setLocation(e.target.value)} 
            />
          </div>

          <div className="col">
            <select className="custom-select my-1 mr-sm-2" value={priceRange} onChange={(e)=>setPriceRange(e.target.value)} >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button className="btn btn-primary" >Add</button>
        </div>
      </form>
    </div>
  );
}
