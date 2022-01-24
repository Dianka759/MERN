import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory, Link } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';

const Update = (props) => {

    const history = useHistory()
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, []);

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(res => console.log(res));
    }

    return (
        <div className='mx-auto w-50 mt-4 p-2 border border-success text-center '>
            <h1>Update an Author</h1>
            {
                loaded && (
                    <>
                        <AuthorForm
                            onSubmitProp={updateAuthor}
                            initialFirstName={author.firstName}
                            initialLastName={author.lastName}
                        />
                        <div className='mt-2'>
                        <Link to={'/authors'}><button className='btn btn-outline-primary'>All Authors</button></Link>
                            <DeleteButton authorId={author._id} successCallback={() => history.push("/authors")} />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Update;