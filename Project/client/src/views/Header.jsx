import React from 'react';
import '../views/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@material-ui/core';
import { Avatar } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Header() {
    return (
        // CONTAINER

        <div className='header'>
            

            {/* LEFT */}
            <div className="header__left">
                <h1>Coding Dojo</h1>
                <Button variant="contained">Beta</Button>
                <ArrowRightIcon className="arrow_icon"/> 
                <p>Online Full-time Tracks</p>   
            </div>

            {/* RIGHT */}
            <div className="header__right">
                <div className="search__bar">
                    <input type="text" />
                    <SearchIcon />
                </div>
                <a href src="www.google.com" className="menu_links">HOME</a>
                <a href src="" className="menu_links">LEARN</a>
                <a href src="" className="menu_links">CONTACT</a>
                <Avatar className="avatar"/>
            </div>
        </div>
    );
}

export default Header;
