import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantContext } from "../contentex/RestaurantContext";
import AddReview from "./AddReview";
import StarRating from "./StarRating";

export default function RestaurantDetail() {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantContext
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(res.data.data);
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
//  pass the selectedRestaurant into the Review page to map it
  return <div>{ selectedRestaurant && <StarRating rating={3.3} /> }
  <AddReview />
  </div>;

}
