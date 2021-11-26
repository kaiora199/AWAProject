import React from "react";

export default function OneOrderContainer(props){
    return(<div>
      <div>
      <ul>
        <li>{props.orderPrice}</li>
        <li>{props.orderStatus}</li>
        <li>{props.orderQuantity}</li>
        <li>{props.orderDate}</li>
        <li>{props.orderNumber}</li>
        <li>{props.customerName}</li>
        <li>{props.customerDetails}</li>
        <li>{props.customerEmail}</li>
        <li>{props.customerAddress}</li>
        <button onClick={()=>props.deleteOrder(props.id)}>delete</button>
      </ul>
    </div>
    </div>
    )
}