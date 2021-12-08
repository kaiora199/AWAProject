import React from "react";
import styles from './Restaurant.module.css'

export default function AddRestaurantComponent(props){
    return(
        <div className={styles.restaurantCreator}>
            Add name
      <input type="text" onChange={props.newRestaurantHandlerName}/>
      Add address
      <input type="text" onChange={props.newRestaurantHandlerAddress}/>
      Add price level
      <input type="text" onChange={props.newRestaurantHandlerPrice}/>
      Add operating hours
      <input type="text" onChange={props.newRestaurantHandlerHours}/>
      Add restaurant type
      <input type="text" onChange={props.newRestaurantHandlerType}/>
      Add an image
      <input type="file"/>
      <button onClick={props.addNewRestaurant}>Add restaurant</button>

      </div>
    )
}