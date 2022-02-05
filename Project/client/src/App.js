import React from 'react';
import useLocalStorage from 'use-local-storage';


import Header from './views/Header';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import SubNavigation from './views/SubNavigation';
import Sidebar from './views/Sidebar'
import Widget from './views/Widget';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import OneChapter from './views/OneChapter';
import OneStack from './views/OneStack';
import Navigation from './components/ChapterList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Stringifier from './components/Stringifier';
import Main from './views/Main';
import DisplayHTML from './components/DisplayHTML';

function App() {
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
            {/* <ThemeProvider theme={theme}> */}
            <div className="top">
              <Header />
            </div>
            <div className="middle">
              {/* <button onClick={switchTheme}>
                Switch to {theme === 'light' ? 'Dark' : "Light"}
              </button> */}
              <SubNavigation switchTheme={switchTheme} theme={theme} />
            </div>
            <div className="container">
              <div className="dash__container">
                <Sidebar stacks={stacks} />
                <Widget stacks={stacks} />
              </div>
            </div>
            {/* </ThemeProvider> */}
          </div>
          {/* <AllStacks /> */}
        </Route>


        <Route exact path="/stacks/chapters/:chapterID">
        {/* <div className="oneChapter"> */}
          <Main  stacks={stacks}/>
          {/* <OneChapter /> */}
          {/* </div> */}
        </Route>

        <Route exact path="/stacks/:_id">
          <Navigation />
        </Route>

        <Route exact path="/stringfier">
          <Stringifier/>
        </Route>

        <Route exact path="/displayHTML">
          <DisplayHTML/>
        </Route>

        {/* </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
