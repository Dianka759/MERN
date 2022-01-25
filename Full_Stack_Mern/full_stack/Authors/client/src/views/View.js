import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';


const AuthorList = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                setAuthors(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [authors]);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='mt-2 p-2 text-center w-50'>
                <div className='border border-warning p-3 mb-4'>
                    <h2>Favorite Authors</h2>
                    <Link to={`/authors/new`}><button className='btn btn-outline-primary mt-2'> Add a new Author </button></Link>
                </div>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Author</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    {authors.sort((a, b) => a.firstName.localeCompare(b.firstName)).map((author, idx) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row"><p key={idx}> {author.firstName} {author.lastName}</p></th>
                                        <th scope="row"><Link to={"/authors/" + author._id + "/edit"} className='mx-2 btn btn-outline-warning'>
                                            Edit
                                        </Link>
                                            <DeleteButton className='ms-2' authorId={author._id} successCallback={() => removeFromDom(author._id)} />
                                        </th>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })}
                </table>
            </div>
        </div>
    );
}

export default AuthorList;