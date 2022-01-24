import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AuthorForm = (props) => {
    //keep track of what is being typed via useState hook
    const { initialFirstName, initialLastName, onSubmitProp, initialErrors } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);

    const history = useHistory();

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ firstName, lastName })
        if (initialErrors === "null") {
            history.push("/authors")
        }
    }

    return (
        <div className='mt-5 p-3 w-50 mx-auto mx-auto border border-danger text-center'>
            <form onSubmit={onSubmitHandler}>
                {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
                {initialErrors && (
                    <>
                        <span style={{ color: "red" }}>
                            {initialErrors.firstName.message}
                        </span> <br></br>
                        <span style={{ color: "red" }}>
                            {initialErrors.lastName.message}
                        </span>
                    </>
                )}
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
        </div>
    )
}
export default AuthorForm;