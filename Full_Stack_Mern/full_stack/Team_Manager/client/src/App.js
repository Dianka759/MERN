import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import './App.css';

import View from './views/View';
import Create from './views/Create';
import PlayerStatus from './views/PlayerStatus';
import Nav from './views/Nav';
import OtherNav from './views/OtherNav';
import Update from './views/Update';
import ViewOne from './views/ViewOne';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Route exact path="/">
        <Redirect to="/players/list" />
      </Route>

      <Route exact path='/players/list'>
        <OtherNav />
        <View />
      </Route>

      <Route exact path='/players/addplayer'>
        <OtherNav />
        <Create />
      </Route>

      <Route exact path="/players/edit/:id">
      <Update/>
      </Route>

      <Route exact path="/player/:id">
      <ViewOne/>
      </Route>

      <Route exact path='/status/game/:id'>
        <PlayerStatus />
      </Route>

    </BrowserRouter>
  );
}

export default App;
