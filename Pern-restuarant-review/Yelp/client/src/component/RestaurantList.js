import React, { useContext, useEffect } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantContext } from "../contentex/RestaurantContext";
import {useHistory} from "react-router-dom"
export default function RestaurantList(props) {
  let history = useHistory()
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await RestaurantFinder.get("/");
        setRestaurants(res.data.data.restaurants);
        console.log(restaurants);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  const handleUpdate = (id)=>{
    //it does push you to the page instead of using Link
history.push(`/restaurants/${id}/update`)
  }
  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants && restaurants.map(({ name, location, price_range,id  }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{location}</td>
                <td>{"$".repeat(price_range)}</td>
                <td>Review</td>
                <td>
                  <button className="btn btn-warning" onClick={()=> handleUpdate(id)}>Update</button>{" "}
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
