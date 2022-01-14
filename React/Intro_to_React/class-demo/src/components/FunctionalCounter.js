import React, { useState } from "react";

const FunctionalCounter = (props) => {
    const [counter, setCounter] = useState(props.start);
    const [hover, setHover] = useState(false);

    const style = {
        backgroundColor: "black",
        color: "white"
    }

    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    const onHoverHandler = () => {
        setHover(!hover);
    }

    return (
        <div style={hover ? style : {}} onMouseEnter={onHoverHandler} onMouseLeave={onHoverHandler}>
            <div> you clicked {counter} times!!! but now its cool cuz its functional</div>
            <button onClick={increaseCounter}> Clicketh mehhhhh</button>
        </div>
    )
}

export default FunctionalCounter;