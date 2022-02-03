import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useHistory, useParams } from "react-router-dom";
import Collapsible from '../components/Collapsible';

const OneStack = (props) => {
    const [stack, setStack] = useState([])
    const { _id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/stacks/' + _id)
            .then(res => {
                console.log(res.data)
                setStack(res.data)
            })
            .catch(err => console.error(err));
    }, []);


    return (
        <div className='mt-3 mx-auto w-50 fs-5'>
            <div>
                {/* <div className='d-flex justify-content-between'> */}
                {/* Stack Title: {stack.stack.title}
                </div>
                <div className='p-3 border border-warning mt-2 text-center'>
                    {stack.stack.chapter.map((chapter, idx) => {
                        return (
                            <>
                                <Link to={"/stacks/chapters/" + chapter._id}>  <p >  Chapter: {chapter.title} </p></Link>
                                <p >  Contents: {chapter.section.contents} </p>
                            </>
                        )
                    })}
                </div> */}
            </div>
            <p> Idk </p>
            <Collapsible />
            <Collapsible/>
        </div>
    )
}

export default OneStack;
