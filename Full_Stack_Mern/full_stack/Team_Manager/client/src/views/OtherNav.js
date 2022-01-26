import React from 'react'
import { Link } from 'react-router-dom';

const OtherNav = (props) => {
    return (
        <div className='mx-auto mt-2 p-2 text-center'>
            <div className='mt-2 border border-danger p-2'>
                <Link to={"/players/list"} className='mx-2 btn btn-outline-warning'>List</Link>
                <Link to={"/players/addplayer"} className='btn btn-outline-success ms-2'>Add Player </Link>
            </div>
        </div>
    )
}

export default OtherNav;