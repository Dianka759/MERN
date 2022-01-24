import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Detail from './views/Detail';
import Update from './views/Update';
import ProductForm from './components/ProductForm';
import Main from './views/Main';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/products">
          <Main />
        </Route>
        <Route exact path="/products/:id">
          <Detail />
        </Route>
        <Route exact path="/products/:id/edit">
          <Update />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;