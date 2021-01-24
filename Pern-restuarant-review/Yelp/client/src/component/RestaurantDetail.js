import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantContext } from "../contentex/RestaurantContext";

export default function RestaurantDetail() {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantContext
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(res.data.data.restaurants);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
 
  return <div>{ selectedRestaurant &&selectedRestaurant.name}</div>;
}
