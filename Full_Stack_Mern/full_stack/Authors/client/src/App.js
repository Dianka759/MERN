import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,useHistory} from "react-router-dom";
import axios from 'axios';
import Update from './views/Update';
import AuthorForm from './views/AuthorForm';
import AuthorList from './views/AuthorList';

function App() {
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
      <div className="App">
        <Route exact path="/authors">
          <AuthorList />
        </Route>
        <Route exact path="/authors/new">
          <AuthorForm onSubmitProp={createAuthor} initialFirstName="" initialLastName="" errors={errors} />
        </Route>
        <Route exact path="/authors/:id/edit">
          <Update />
        </Route>
      </div>
  );
}

export default App;