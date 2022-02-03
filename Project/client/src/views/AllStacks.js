import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import axios from 'axios';

const AllStacks = (props) => {
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

    return (
        <div className='mx-auto w-75 mt-2 p-2'>
            <div className='p-3 mb-4'>
                <div className='d-flex justify-content-between'>
                    <h1>The learn platform, but better.</h1>
                </div>

                {stacks.map((stack, idx) => {
                    return (
                        <>
                            <Link to={"/stacks/" + stack._id}><p> Stack: {stack.stack.title} </p></Link>
                            {stack.stack.chapter.map((chapter, idx) => {
                                return (
                                    <>
                                        <Link to={"/stacks/chapters/" + chapter._id}>  <p >  Chapter: {chapter.title} </p></Link>
                                    </>
                                )
                            })}
                        </>
                    )
                })}

            </div>
        </div >
    );
}

export default AllStacks;