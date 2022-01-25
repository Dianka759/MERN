import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory, Link } from 'react-router-dom';
import AuthorForm from './AuthorForm';
import DeleteButton from '../components/DeleteButton';
import NotFound from './NotFound';

const Update = (props) => {

    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const history = useHistory()
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                if (res.data.name) {
                    setAuthor("")
                } else {
                    setAuthor(res.data);
                    setLoaded(true);
                }
            })
            .catch(err => console.log(err))
    }, []);

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
        setErrors([])
        history.push("/authors")

            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                // setErrors(err.response.data.errors);
            })
    }

    return (
        <div className='mx-auto  mt-4 p-2 border border-success text-center '>
            {(!author)  
            ? <NotFound/>
            : loaded && (
                    <> 
                    <h1>Update an Author</h1>
                        <AuthorForm
                            onSubmitProp={updateAuthor}
                            initialFirstName={author.firstName}
                            initialLastName={author.lastName}
                            errors = {errors}
                        />
                        <div className='mt-4'>
                            {/* <Link to={'/authors'}><button className='btn btn-outline-primary mx-3'>All Authors</button></Link> */}
                            <DeleteButton authorId={author._id} successCallback={() => history.push("/authors")} />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Update;