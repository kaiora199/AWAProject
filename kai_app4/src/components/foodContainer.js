import React from "react";

export default function OneFoodContainer(props){
    return(<div>
      <div>
      <ul>
        <li>{props.id}</li>
        <li>{props.title}</li>
        <li>{props.description}</li>
        <li>{props.price}€</li>
        <li>{props.restaurantID}</li>
        <button onClick={()=>props.deleteFood(props.id)}>delete</button>
      </ul>
    </div>
    </div>
    )
}