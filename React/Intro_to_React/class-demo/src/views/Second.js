import React from "react";
import { useParams } from "react-router-dom";

const Second = (props) => {
    const { word, color } = useParams();
    
    const style = {
        backgroundColor: color,
        color: "white"
    }

    return (
        <div>
            <h1 style={style}> Your word is {word} </h1>
        </div>
    )
}

export default Second;