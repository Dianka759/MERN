import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import View from './views/View';
import Create from './views/Create';
import PlayerStatus from './views/PlayerStatus';
import Nav from './views/Nav';
import OtherNav from './views/OtherNav';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Route exact path="/">
        <Redirect to={"/players/list"} />
      </Route>

      <Route exact path={'/players/list'}>
        <OtherNav />
        <View />
      </Route>

      <Route exact path={'/players/addplayer'}>
        <OtherNav />
        <Create />
      </Route>

      <Route exact path={'/status/game/:id'}>
        <PlayerStatus />
      </Route>

    </BrowserRouter>
  );
}

export default App;
