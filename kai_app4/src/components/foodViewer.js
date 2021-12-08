import React from "react";
import OneFoodContainer from "./foodContainer.js"
import styles from './Food.module.css'

export default function FoodViewer(props){
    return(<div className={styles.foodContainerMany}>
        {
            props.fooData.map((i, index) => <OneFoodContainer {...i} deleteFood={props.deleteFood} key={index}/>)
        }
    </div>
    )
}