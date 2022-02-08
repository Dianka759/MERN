import React from 'react';
import useLocalStorage from 'use-local-storage';

import Header from '../Header/Header'
// import SubNavigation from '../SubNavigation';
// import Sidebar from '../SideBar/Sidebar'
// import Widget from '../Widget/Widget';
import 'bootstrap/dist/css/bootstrap.css'
import './Main.css'
import SidebarSingle from '../SideBarSingleChapter/SidearSingle';
import WidgetSingle from '../WidgetSinglePage/WidgetSingle';
import SubNav_Chapter from '../SubNavigationSingleChapter/SubNav_Chaper';
import { useState } from 'react';

function Main(props) {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

    const { stacks } = props;
    const [contents, setContents] = useState("Rules");

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    const setContentsToParent = (contents) => {
        setContents(contents);
    }

    return (

        <div className="main" data-theme={theme}>
            <div className="top">
                <Header />
            </div>
            <div className="container">
                <SubNav_Chapter stacks={stacks} switchTheme={switchTheme} theme={theme} />
                <div className="dash__container">
                    <SidebarSingle stacks={stacks} setContentsToParent={setContentsToParent}/>
                    <WidgetSingle contents={contents.contents} />
                </div>
            </div>
        </div>
    );
}

export default Main;