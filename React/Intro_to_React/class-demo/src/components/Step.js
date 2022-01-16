import React, {useState} from 'react';

const Step = (props) => {
    return (
        <div className='step'>
            <span>
                {
                props.direction === "left" ? "⬅" 
                : props.direction === "right" ? "➡"
                : props.direction === "forward" ? "⬆"
                : "⬇"
                }
            </span>
            <p> {props.text} <button onClick={()=> {props.onDeleteHandler(props.index)}}>X</button></p>
        </div>
    )
}

export default Step;