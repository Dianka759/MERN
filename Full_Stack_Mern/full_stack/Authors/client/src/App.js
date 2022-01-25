import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Redirect} from "react-router-dom";
import Update from './views/Update';
import View from './views/View';
import Create from './views/Create';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/">
      <Redirect to="/authors" />
      </Route>
      <Route exact path="/authors">
        <View />
      </Route>
      <Route exact path="/authors/new">
        <Create />
      </Route>
      <Route exact path="/authors/:id/edit">
        <Update />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;