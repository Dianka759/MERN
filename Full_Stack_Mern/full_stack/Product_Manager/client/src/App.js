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
import ProductList from './components/ProductList'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Route exact path="/">
          <ProductForm />
        </Route>
        <Route exact path="/products">
          <ProductForm />
          <ProductList/>
        </Route>
        <Route path="/products/:id">
          <Detail />
        </Route>
        <Route path="/products/:id/edit">
          <Update />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;