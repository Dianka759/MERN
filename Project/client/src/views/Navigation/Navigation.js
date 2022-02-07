import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import axios from 'axios';
import ChapterList from '../components/ChapterList';
import Contents from '../../components/Contents';

const Navigation = (props) => {

    return (
        <div className='mx-auto w-75 mt-2 p-2'>
            <ChapterList />
        </div >
    );
}

export default Navigation;