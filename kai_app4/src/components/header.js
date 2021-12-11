import React from "react";
import styles from './Header.module.css';
import {Link} from 'react-router-dom';

export default function HeaderFront(props){
    return(<div className={styles.headerContainer}>
        <h1>Food application</h1>
        <button>Shopping cart</button>
        <button onClick={()=>props.managerChanger()}>Restaurant<br/>owner</button>
        <button>User</button>
        
        <button>
            <Link to="/login">
                Log in
            </Link>
        </button>
        
        
        
    </div>
    )
}