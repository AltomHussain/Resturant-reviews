import React, {useState, createContext} from 'react'

export const RestaurantContext = createContext();
export const RestaurantContextProvider = props =>{
    return(
        <RestaurantContext.Provider>
            {props.children}
        </RestaurantContext.Provider>
    )
} 
   
