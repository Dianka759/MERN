import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Word from './components/Word'
import Color from './components/Color'
import IslandBoy from './components/IslandBoy';

function App() {
  return (
    <div className='text-center mt-3 border border-danger'>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/islandboy" exact component={IslandBoy}/>
          <Route path="/:word" exact component={Word} />
          <Route path="/:word/:textColor/:backgroundColor" exact component={Color}/>
          
          <Route path="/"
            render={() => ( <div> Invalid URL.</div>)}
          />
        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
