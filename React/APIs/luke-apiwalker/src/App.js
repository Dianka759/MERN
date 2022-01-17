import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from './components/Form';
import Results from './components/Results';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1 className='text-danger'> The one and only Luke APIWalker 🌌🔫🧑</h1>
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path='/:category/:id'>
            <Form></Form>
            <Results></Results>
          </Route>/
          <Route path="/"
            render={() => (<div className='mt-5 fs-3 fw-bold text-danger'> Invalid URL.</div>)}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
