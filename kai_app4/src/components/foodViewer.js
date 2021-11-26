import React from "react";
import OneFoodContainer from "./foodContainer.js"

export default function FoodViewer(props){
    return(<div>
        {
            props.fooData.map((i, index) => <OneFoodContainer {...i} deleteFood={props.deleteFood} key={index}/>)
        }
    </div>
    )
}