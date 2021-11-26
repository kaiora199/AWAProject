import React from "react";

export default function OneUserContainer(props){
    return(<div>
      <div>
      <ul>
        <li>{props.id}</li>
        <li>{props.name}</li>
        <li>{props.address}</li>
        <li>{props.password}</li>
        <li>{props.email}</li>
        <li>{props.orderID}</li>
        <button onClick={()=>props.deleteUser(props.id)}>delete</button>
      </ul>
    </div>
    </div>
    )
}