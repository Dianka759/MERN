import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = (props) => {
    const [name, setName] = useState("");
    const history = useHistory();

    const onSubmitHandler = (event) => {
        // event.preventDefault;
        history.push("/pokemon/" + name)
    }

    return (
        <div className="w-50 mx-auto p-4">
            <form onSubmit={onSubmitHandler}>
                <input type="text" placeholder="Who's that pokemon?!" onChange={(event) => setName(event.target.value)} />
                <br />
                <input type="submit" className="btn btn-lg btn-warning" />
            </form>
        </div>
    )
}

export default Search;