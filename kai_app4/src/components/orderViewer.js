import React from "react";
import OneOrderContainer from "./orderContainer.js"

export default function OrderViewer(props){
    return(<div>
        {
            props.orderData.map((i, index) => <OneOrderContainer {...i} deleteOrder={props.deleteOrder} key={index}/>)
        }
    </div>
    )
}