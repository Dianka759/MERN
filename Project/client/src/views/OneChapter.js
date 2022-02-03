import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useHistory, useParams } from "react-router-dom";
import Collapsible from '../components/Collapsible';

const OneChapter = (props) => {
    const {chapterID } = useParams();
    const [stack, setStack] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/stacks/chapters/' + chapterID)
            .then(res => {
                console.log(res)
                setStack(res.data)
                setLoaded(true)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='mt-3 mx-auto w-50 fs-5'>
            <div>
                <div className='p-3 border border-warning mt-2 text-center'>
                    {loaded && stack.stack.chapter.map((i, idx) => {
                        return (
                        <div>
                            {i._id === chapterID 
                            ?
                                <Collapsible chapterTitle={i.title} section={i.section} img={i.img} />
                            : ""
                            }
                        </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default OneChapter;
