import React, {useState, createContext} from 'react'

export const RestaurantContext = createContext();
export const RestaurantContextProvider = props =>{
    const [restaurants, setRestaurants] = useState([]);

    const addRestaurant = (newRestaurant)=>{
        setRestaurants([...restaurants, newRestaurant])
    }
    return(
        <RestaurantContext.Provider value={{restaurants: restaurants, setRestaurants: setRestaurants, addRestaurant: addRestaurant}}>
            {props.children}
        </RestaurantContext.Provider>
    )
}  


   
