import React from "react";

export default function OneUserContainer(props){
    return(<div>
      <div>
      <ul>
        <li>{props.id}</li>
        <li>{props.orders_id}</li>
        <li>{props.user_email}</li>
        <li>{props.user_fullname}</li>
        <li>{props.user_password}</li>
        <li>{props.username}</li>
        <button onClick={()=>props.deleteUser(props.id)}>delete</button>
      </ul>
    </div>
    </div>
    )
}