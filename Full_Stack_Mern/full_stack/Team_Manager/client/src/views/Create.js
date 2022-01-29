import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import PlayerForm from '../components/PlayerForm';

const Create = (prop) => {
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const createPlayer = player => {
        axios.post('http://localhost:8000/api/players/addplayer', player)
            .then(res => {
                setErrors([])
                history.push("/players/list")
            })

            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }


    return (
        <div className="p-3">
            <PlayerForm onSubmitProp={createPlayer}
                errors={errors}
                initialName=""             
                initialPosition=""
                initialCheckbox= {false}
                initialRadio=""
                initialCounter= {0} />
        </div>
    )
}


export default Create;