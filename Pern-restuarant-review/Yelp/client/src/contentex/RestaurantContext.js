import React, { useState, createContext } from "react";

export const RestaurantContext = createContext();
export const RestaurantContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const addRestaurant = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
  };
  return (
    <RestaurantContext.Provider
      value={{
        restaurants: restaurants,
        setRestaurants: setRestaurants,
        addRestaurant: addRestaurant,
        selectedRestaurant: selectedRestaurant,
        setSelectedRestaurant: setSelectedRestaurant,
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};
