import React from 'react'
import { useParams } from 'react-router'

const Color = () => {
    const { word, textColor, backgroundColor } = useParams();
    const style = {
        color: textColor,
        backgroundColor: backgroundColor,
        padding: '10px',
        fontSize: "25px",
        fontWeight: "bold"
    }

    return (
        isNaN(word) 
        ? (<div style={style}>The word is {word}.</div>) 
        : (<div style={style}>The number is {word}.</div>)
    );
}

export default Color;