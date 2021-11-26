import React from "react";
import OneUserContainer from "./userContainer.js"

export default function UserViewer(props){
    return(<div>
        {
            props.userData.map((i, index) => <OneUserContainer {...i} deleteUser={props.deleteUser} key={index}/>)
        }
    </div>
    )
}