import React from 'react';
import { useParams } from "react-router";

const Word = (props) => {
    const { word } = useParams();
    const style = {
        padding: '10px',
        fontSize: "25px",
        fontWeight: "bold"
    }
    return( 
        isNaN(word) 
        ? (<div style={style}>The word is {word}.</div>) 
        : (<div style={style}>The number is {word}.</div>)
    );
}

export default Word;