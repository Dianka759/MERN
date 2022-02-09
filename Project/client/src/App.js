import React from 'react';
import useLocalStorage from 'use-local-storage';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Main from './views/Main/Main';
import Header from './views/Header/Header';
import SubNavigation from './views/SubNavigation/SubNavigation';
import Sidebar from './views/SideBar/Sidebar'
import Widget from './views//Widget/Widget';
import Navigation from './components/ChapterList';
import Stringifier from './components/Stringifier';
import DisplayHTML from './components/DisplayHTML';

function App(props) {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

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

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }


  return (
      <div className='App' data-theme={theme}>
        <BrowserRouter>
          {/* <Switch> */}
          <Route exact path="/">
            <div className="app">
              <div className="top">
                <Header />
              </div>
              <div className="middle">
                <SubNavigation switchTheme={switchTheme} theme={theme} />
              </div>
              <div className="container">
                <div className="dash__container">
                  <Sidebar stacks={stacks} />
                  <Widget stacks={stacks} />
                </div>
              </div>
            </div>
          </Route>


          <Route exact path="/stacks/chapters/:chapterID">
            {/* <div className="oneChapter"> */}
            <Main stacks={stacks} />
            {/* <OneChapter /> */}
            {/* </div> */}
          </Route>

          <Route exact path="/stacks/:_id">
            <Navigation />
          </Route>

          <Route exact path="/stringfier">
            <Stringifier />
          </Route>

          <Route exact path="/displayHTML">
            <DisplayHTML />
          </Route>

          {/* </Switch> */}
        </BrowserRouter>
      </div>
  );
}

export default App;
