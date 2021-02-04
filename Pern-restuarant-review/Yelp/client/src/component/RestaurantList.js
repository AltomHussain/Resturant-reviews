import React, { useContext, useEffect } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantContext } from "../contentex/RestaurantContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";
export default function RestaurantList(props) {
  let history = useHistory();
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await RestaurantFinder.get("/");
        setRestaurants(res.data.data.restaurants);
        console.log(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);
  //delete restaurant function
  const handleDelete = async (e, id) => {
    //This line will stop clicking the whole line and focus on just delete btn
    e.stopPropagation();
    try {
      const result = prompt("Are you sure you want delete this item?");
      if (result === "Yes") {
        console.log("yes");
      } else {
        console.log("no");
      }
      await RestaurantFinder.delete(`/${id}`);
      setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    //it does push you to the page instead of using Link
    history.push(`/restaurants/${id}/update`);
  };
  const handleRestaurantSelect = (id) => {
    history.push(`/restaurants/${id}`);
  };
///Render rating Func
const renderRating = (id, count)=>{
  // console.log(id);
  if(!count){
    return <span className="text-warning">0 reviews</span>
  }
  return<>
  <StarRating rating={id} />
  <span className="text-warning ml-1">({count})</span>
  </>
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
          {restaurants &&
            restaurants.map(({ name, location, price_range, id, count, average_rating }) => {
              return (
                <tr key={id} onClick={() => handleRestaurantSelect(id)}>
                  <td>{name}</td>
                  <td>{location}</td>
                  <td>{"$".repeat(price_range)}</td>
                  <td>{renderRating(average_rating , count)}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={(e) => handleUpdate(e, id)}
                    >
                      Update
                    </button>{" "}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(e, id)}
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
