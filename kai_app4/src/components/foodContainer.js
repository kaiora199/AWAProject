import React from "react";
import styles from './Food.module.css'

export default function OneFoodContainer(props){
    return(<div className={styles.foodContainerOne}>
      <ul className={styles.foodList}>
        <li className={styles.foodSpaceMaker}>{props.id}</li>
        <li>{props.title}</li>
        <li>{props.description}</li>
        <li>{props.price}€</li>
        <li>{props.restaurants_id}</li>
      </ul>
    </div>
    )
}