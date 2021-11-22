import React from "react";
import OneRestaurantContainer from "./restaurantContainer.js"

export default function RestaurantViewer(props){
    return(<div>
        {
            props.restauData.map((i, index) => <OneRestaurantContainer {...i} deleteRestaurant={props.deleteRestaurant} key={index}/>)
        }
    </div>
    )
}