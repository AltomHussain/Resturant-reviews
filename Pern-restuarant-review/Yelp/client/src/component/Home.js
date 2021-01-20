import React from 'react'
import AddRestaurant from './AddRestaurant'
import Header from './Header'
import RestaurantList from './RestaurantList'

export default function Home() {
    return (
        <div>
            <Header/>
            <AddRestaurant />
            <RestaurantList />
            Home
        </div>
    )
}
