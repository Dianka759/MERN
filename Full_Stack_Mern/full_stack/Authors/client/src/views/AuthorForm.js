import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AuthorForm = (props) => {

    const { initialFirstName, initialLastName, onSubmitProp, errors } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ firstName, lastName })
    }

    return (
        <div className='mt-5 p-3 w-50 mx-auto mx-auto border border-danger text-center'>
            <h2 className='mb-3'>Add a new Favorite Author!</h2>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index} className='text-danger'>{err}</p>)}
                <p>
                    <label>First Name:</label><br />
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </p>
                <input type="submit" className='btn btn-outline-success' />
            </form>
            <Link to={'/authors'}><button className='btn btn-outline-primary mt-3'>All Authors</button></Link>
        </div>
    )
}
export default AuthorForm;