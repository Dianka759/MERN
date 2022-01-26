import React from 'react'
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className='mx-auto mt-2 p-2 text-center'>
            <Link to={"/"} className='mx-2 btn btn-outline-primary'>Manage Players</Link>
            <Link to={"/status/game/1"} className='btn btn-outline-primary'>Manage Player Status</Link>
        </div>
    )
}

export default Nav;