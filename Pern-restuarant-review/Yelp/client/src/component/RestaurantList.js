import React, { useContext, useEffect } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantContext } from "../contentex/RestaurantContext";

export default function RestaurantList(props) {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await RestaurantFinder.get("/");
        setRestaurants(res.data.data.restaurants);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);
  //delete restaurant function 
  const handleDelete = async(id) => {
   try {
    await RestaurantFinder.delete(`/${id}`);
     setRestaurants(restaurants.filter(restaurant => restaurant.id !== id))
   } catch (error) {
     console.log(error.message);
   }
  };

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
          {restaurants &&
            restaurants.map(({ name, location, price_range, id }) => {
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{location}</td>
                  <td>{"$".repeat(price_range)}</td>
                  <td>Review</td>
                  <td>
                    <button className="btn btn-warning">Edit</button>{" "}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
