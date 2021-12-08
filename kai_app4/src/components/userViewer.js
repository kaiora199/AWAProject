import React from "react";
import OneUserContainer from "./userContainer.js"
import styles from './User.module.css'

export default function UserViewer(props){
    return(<div className={styles.userContainerMany}>
        {
            props.userData.map((i, index) => <OneUserContainer {...i} deleteUser={props.deleteUser} key={index}/>)
        }
    </div>
    )
}