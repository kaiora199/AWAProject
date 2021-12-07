import React from "react";
import styles from "./Restaurant.module.css"

export default function SearchComponent(props){
    return(
        <div className={styles.restaurantSearch}>
        Search for a restaurant
      <input type="text" className={styles.searchInput} onChange={props.onRestaurantSearch} value={props.restSearchValue}/>
      </div>
    )
}