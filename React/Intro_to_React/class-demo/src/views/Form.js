import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Form = (props) => {
    const [color, setColor] = useState("");
    const [word, setWord] = useState("");
    const history = useHistory();


    const onSubmitHandler = (event) => {
        event.preventDefault();
        history.push("/second/" + word + "/" + color);
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="row w-50 mx-auto mt-3">
                    <div className="col">
                        <label>Color</label>
                        <input type="text" placeholder="color here..." onChange={(event) => setColor(event.target.value)} />
                    </div>
                    <div className="col">
                        <label>Word</label>
                        <input type="text" placeholder="word here..." onChange={(event) => setWord(event.target.value)} />
                    </div>
                </div>
                <input type="submit" className="btn btn-lg btn-primary" />
            </form>
        </div>
    )
}

export default Form;