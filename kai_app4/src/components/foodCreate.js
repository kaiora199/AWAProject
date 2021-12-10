import React from "react";
import styles from './Restaurant.module.css'

export default function AddFoodComponent(props){
    return(
        <div className={styles.restaurantCreator}>
            <h4>Create a food item</h4>
            Add title
      <input type="text" onChange={props.newFoodHandlerTitle}/>
      Add description
      <input type="text" onChange={props.newFoodHandlerDesc}/>
      Add price
      <input type="text" onChange={props.newFoodHandlerPrice}/>
      Add restaurant ID
      <input type="text" onChange={props.newFoodHandlerResID}/>
      Add an image
      <input type="file"/>
      <button onClick={props.addNewFood}>Add food</button>

      </div>
    )
}