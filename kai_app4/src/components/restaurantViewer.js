import React from "react";
import OneRestaurantContainer from "./restaurantContainer.js"
import styles from "./Restaurant.module.css"

export default function RestaurantViewer(props){
    return(<div className={styles.restaurantContainerMany}>
        {
            props.restauData.map((i, index) => <OneRestaurantContainer {...i} deleteRestaurant={props.deleteRestaurant} key={index}/>)
        }
    </div>
    )
}