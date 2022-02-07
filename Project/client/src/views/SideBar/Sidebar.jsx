import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import './Sidebar.css'
import SidebarRow from '../SideBarRow/SidebarRow';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';

const Sidebar = (props) => {
    const { stacks } = props;
    const [stackName, setStackName] = useState("MERN")
    const history = useHistory();

    const onChangeHandler = (event) => {
        setStackName(event.target.value)
    }

    const onChapterSelect = (chapterId) => {
        console.log("I DID ZE THING, THE CLICKY CLICKY.")
        history.push("/stacks/chapters/" + chapterId)
    }


    return (
        <div className="sidebar">
            <div className="course_title">
                <p>Course Progress </p>
                <div data-toggle="dropdown" >
                    {/* <a href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <ArrowRightIcon />
                        Python v20.1
                    </a> */}

                    <select onChange={onChangeHandler}>
                        {stacks.map((stack, idx) => {
                            return (
                                <>
                                    <option value={stack.stack._id} name="stackName"> {stack.stack.title} </option>
                                </>
                            )
                        })}
                    </select>



                </div>
            </div>
            <div className="progress_label">
                <span className="boxlabel_left"></span>
                <div className="label_left">
                    OnTime Progress
                </div>
                <span className="boxlabel_right" ></span>
                <div className="label_right">
                    Out-of-schedule Progress
                </div>

            </div>
            <div className="image">
                {stacks.map((stack, idx) => {
                    return (
                        <>
                            {stack.stack.title === stackName
                                ? <>
                                    {
                                        stack.stack.chapter.map((chapter, idx) => {
                                            return (
                                                <>
                                                    <p onClick={() => onChapterSelect(chapter._id)}>
                                                        <SidebarRow
                                                            logo={<img src={chapter.image}/>}
                                                            title={chapter.title}
                                                            score="0/16" />
                                                    </p>
                                                </>
                                            )
                                        })
                                    }
                                </>
                                : ""
                            }
                        </>
                    )
                })}
            </div>
            {/* <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/Arrays.png?1524468437" />}
                title="Orientation"
                score="0/16" />

            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/python.png?1459493418" />}
                title="Fundamentals"
                score="0/16" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/flask.png?1459493434" />}
                title="Flask"
                score="0/16" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/mysql.png?1450147378" />}
                title="MySQL"
                score="0/16" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/Arrays.png?1524468437" />}
                title="Flask + MySQL"
                score="0/16" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/Arrays.png?1524468437" />}
                title="AJAX v20.4"
                score="0/16" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/deployment.png?1448531694" />}
                title="Flask Deployment"
                score="0/16" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/trial.png" />}
                title="Projects"
                score="0/16" /> */}


        </div>);
}

export default Sidebar;

