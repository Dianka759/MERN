import React from 'react';
import useLocalStorage from 'use-local-storage';

import Header from './Header'
import SubNavigation from './SubNavigation';
import Sidebar from './Sidebar'
import Widget from './Widget';
import 'bootstrap/dist/css/bootstrap.css'
import './Main.css'
import SidebarSingle from './SidearSingle';
import WidgetSingle from './WidgetSingle';
import SubNav_Chapter from './SubNav_Chaper';

function Main(props) {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

    const { stacks } = props;

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    return (

        <div className="main" data-theme={theme}>
            <div className="top">
                <Header />
            </div>
            <div className="container">
                <SubNav_Chapter stacks={stacks} switchTheme={switchTheme} theme={theme} />
                <div className="dash__container">
                    <SidebarSingle stacks={stacks} />
                    <WidgetSingle stacks={stacks} />
                </div>
            </div>
        </div>
    );
}

export default Main;