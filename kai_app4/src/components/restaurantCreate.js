import React from "react";
import styles from './Restaurant.module.css'

export default function AddRestaurantComponent(props){
    return(
        <div className={styles.restaurantCreator}>
            <h4>Create a restaurant</h4>
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
      <h3>Your restaurants</h3>
      {props.restauData.map(rest => 
      <div>
        <ul className={styles.restaurantListAdmin}>
        <li className={styles.spaceMaker}>{rest.id}</li>
        <li>{rest.name}</li>
        <li>{rest.address}</li>
        <li>{rest.operatingHours}€</li>
        <li>{rest.restaurantType}</li>
        <li>{rest.priceLevel}</li>
        <button onClick={()=>props.deleteRestaurant(rest.id)}>delete</button>
      </ul>
      </div>)}

      </div>
    )
}