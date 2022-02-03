import Header from './views/Header';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import SubNavigation from './views/SubNavigation';
import Sidebar from './views/Sidebar'
import Widget from './views/Widget';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllStacks from './views/AllStacks'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import OneChapter from './views/OneChapter';
import OneStack from './views/OneStack';
import Navigation from './components/ChapterList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [stacks, setStacks] = useState([]);

  useEffect(() => {
    axios
        .get("http://localhost:8000/api/stacks")
        .then((res) => {
            setStacks(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);


  const theme = createTheme({
    pallette: {
      type: "dark",
    }
  });
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="app">
            <ThemeProvider theme={theme}>
              <div className="top">
                <Header />
              </div>
              <div className="middle">
                <SubNavigation />
              </div>
              <div className="container">
                <div className="dash__container">
                  <Sidebar stacks={stacks}/>
                  <Widget stacks={stacks}/>
                </div>
              </div>
            </ThemeProvider>
          </div>
          {/* <AllStacks /> */}
        </Route>

        <Route exact path="/stacks/chapters/:chapterID">
          <OneChapter />
        </Route>

        <Route exact path="/stacks/:_id">
          <Navigation />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
