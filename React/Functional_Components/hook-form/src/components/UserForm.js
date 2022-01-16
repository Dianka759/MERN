import React, { useState } from  'react';
import 'bootstrap/dist/css/bootstrap.min.css';
    
    
const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword};
        console.log("Welcome", newUser);
    };
    
    return(
        <div className='container mt-5'>
        <form onSubmit={ createUser }>
            <div className='mb-2 form-control'>
                <label>First Name: </label>  <br/>
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div className='mb-2 form-control'>
                <label>Last Name: </label> <br/>
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div className='mb-2 form-control'>
                <label>Email Address: </label> <br/>
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div className='mb-2 form-control'>
                <label>Password: </label> <br/>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div className='mb-2 form-control'>
                <label>Confirm Password: </label> <br/>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <div className='mt-5'>
            <h2>Your Form Data: </h2>
            <p>First Name: <span className='text-danger'>{firstname}</span> </p>
            <p>Last Name: <span className='text-danger'>{lastname}</span></p>
            <p>Email: <span className='text-danger'>{email}</span></p>
            <p>Password: <span className='text-danger'>{password}</span></p>
            <p>Confirm Password: <span className='text-danger'>{confirmpassword}</span></p>
        </div>
        </div>
    );
};
    
export default UserForm;