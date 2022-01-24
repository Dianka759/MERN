import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import axios from 'axios';
import Update from './views/Update';
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList';

function App() {
  const [authors, setAuthors] = useState([]);
  const [errors, setErrors] = useState(null);
  const history = useHistory();


  const createAuthor = author => {
    axios.post('http://localhost:8000/api/authors', author)
      .then(res => {
        setAuthors([...authors, res.data]);
        // history.push("/authors")
        setErrors(null)
        history.push("/authors")
      })

      .catch(err => {  
        if(author === undefined) {return}
        // const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        // const errorArr = []; // Define a temp error array to push the messages in
        // for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
        //   errorArr.push(errorResponse[key].message)
        // }
        // // Set Errors
        // setErrors(err);
        setErrors(err.response.data.errors);
      })
      
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/authors">
          <AuthorList />
        </Route>
        <Route exact path="/authors/new">
          <AuthorForm onSubmitProp={createAuthor} initialFirstName="" initialLastName="" initialErrors={errors}  />
        </Route>
        <Route path="/authors/:id/edit">
          <Update />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;