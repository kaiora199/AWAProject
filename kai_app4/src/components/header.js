import React from "react";
import styles from './Header.module.css';

export default function HeaderFront(props){
    return(<div className={styles.headerContainer}>
        <h1>Food application</h1>
        <button>Shopping cart</button>
        <button>User</button>
    </div>
    )
}