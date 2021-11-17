import React from "react";
import Doggie from "./dog.js"

export default function DogPound(props){
    return(<div>
        {
            props.restauData.map((i, index) => <Doggie {...i} deleteRestaurant={props.deleteRestaurant} key={index}/>)
        }
    </div>
    )
}