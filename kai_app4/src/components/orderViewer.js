import React from "react";
import OneOrderContainer from "./orderContainer.js"
import styles from './Order.module.css'

export default function OrderViewer(props){
    return(<div className={styles.orderContainerMany}>
        {
            props.orderData.map((i, index) => <OneOrderContainer {...i} deleteOrder={props.deleteOrder} key={index}/>)
        }
    </div>
    )
}