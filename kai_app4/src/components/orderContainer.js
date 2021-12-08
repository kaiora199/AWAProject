import React from "react";
import styles from './Order.module.css'

export default function OneOrderContainer(props){
    return(<div className={styles.orderContainerOne}>
      <ul className={styles.orderList}>
        <li className={styles.orderSpaceMaker}>{props.id}</li>
        <li>{props.customer_adress}</li>
        <li>{props.customer_details}</li>
        <li>{props.customer_email}</li>
        <li>{props.customer_name}</li>
        <li>{props.order_number}</li>
        <li>{props.order_price}</li>
        <li>{props.order_quanordersrestaurantstity}</li>
        <li>{props.order_date}</li>
        <li>{props.order_status}</li>
        <button onClick={()=>props.deleteOrder(props.id)}>delete</button>
      </ul>
    </div>
    )
}