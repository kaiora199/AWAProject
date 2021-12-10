import React from "react";
import styles from "./Restaurant.module.css"

export default function OneRestaurantContainer(props){
    return(
      <div className={styles.restaurantContainerOne}>
      <ul className={styles.restaurantList}>
        <li className={styles.spaceMaker}>{props.id}</li>
        <li>{props.name}</li>
        <li>{props.address}</li>
        <li>{props.operatingHours}</li>
        <li>{props.restaurantType}</li>
        <li>{props.priceLevel}</li>
      </ul>
    </div>

    )
}