import React from "react";
import styles from './Restaurant.module.css'
import stylesFood from './Food.module.css'

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
      <h3>Your food items</h3>
      {props.fooData.map(food => 
      <div>
        <ul className={stylesFood.foodListAdmin}>
        <li className={stylesFood.foodSpaceMaker}>{food.id}</li>
        <li>{food.title}</li>
        <li>{food.description}</li>
        <li>{food.price}€</li>
        <li>{food.restaurants_id}</li>
        <button onClick={()=>props.deleteFood(food.id)}>delete</button>
      </ul>
      </div>)}

      </div>
    )
}