import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantContext } from "../contentex/RestaurantContext";

import AddReview from "./AddReview";

import Reviews from "./Reviews";
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
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {selectedRestaurant && (
        <>
          {/* show restaurant name as header */}
          <h1 className="text-center mt-3">
            {selectedRestaurant.restaurants[0].name}
          </h1>
          <div className="text-center">
            {
              <StarRating
                rating={selectedRestaurant.restaurants.map(
                  (avg) => avg.average_rating
                )}
              />
            }
            <span className="text-warning ml-1">
              {selectedRestaurant.restaurants
                ? `(${selectedRestaurant.restaurants.map((avg) => avg.count)})`
                : "(0)"}
            </span>
          </div>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
            
          </div>
          <AddReview />
        </>
      )}
    </div>
  );
}
