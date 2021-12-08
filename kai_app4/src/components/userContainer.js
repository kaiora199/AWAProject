import React from "react";
import styles from './User.module.css'

export default function OneUserContainer(props){
    return(
      <div className={styles.userContainerOne}>
      <ul className={styles.userList}>
        <li className={styles.userSpaceMaker}>{props.id}</li>
        <li>{props.orders_id}</li>
        <li>{props.user_email}</li>
        <li>{props.user_fullname}</li>
        <li>{props.user_password}</li>
        <li>{props.username}</li>
        <button onClick={()=>props.deleteUser(props.id)}>delete</button>
      </ul>
    </div>
    )
}