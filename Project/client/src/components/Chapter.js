import React from 'react';
import { Link } from 'react-router-dom';

const Chapter = (props) => {
    const { title, img, chapterID, stackID } = props;
    return (
        <>
            <div>
                <Link to={"/stacks/chapters/" + stackID + "/" + chapterID} className='m-2 btn btn-outline-primary'> <img src={img} alt='icon' width={"20px"} />{title}</Link>
            </div>
        </>
    )
}

export default Chapter;