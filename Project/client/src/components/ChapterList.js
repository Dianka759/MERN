import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Chapter from './Chapter';

const ChapterList = (props) => {
    const { _id } = useParams();
    const [stack, setStack] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/stacks/' + _id)
            .then(res => {
                console.log(res.data)
                setStack(res.data)
                setLoaded(true)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='mx-auto w-75 mt-2 p-2'>
            <h1> WE IZ HEREZ </h1>
            <div className='p-3 mb-4'>
                <div className='d-flex justify-content-between'>
                    {loaded
                        ?
                        <div>
                            <img src={stack.stack.image} alt='snek' width={"20px"} />
                            {stack.stack.title}
                            <img src={stack.stack.image} alt='snek' width={"20px"} />
                        </div>
                        : ""
                    }
                </div>
                {loaded && stack.stack.chapter.map((chapter, idx) =>
                    <Chapter chapterID={chapter._id} stackID={_id} title={chapter.title} img={chapter.image} />
                )
                }
            </div>
        </div >
    );
}

export default ChapterList;