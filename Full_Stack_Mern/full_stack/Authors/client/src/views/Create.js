import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

const Create = (prop) => {
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res => {
                setErrors([])
                history.push("/authors")
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
            <AuthorForm onSubmitProp={createAuthor} initialFirstName="" initialLastName="" errors={errors} />
        </div>
    )
}


export default Create;