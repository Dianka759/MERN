import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Collapsible from '../../components/Collapsible';
import CustomAccordion from '../../components/CustomAccordion';
import '../SideBar/Sidebar.css'
import SidebarRowSingle from '../SideBarRowSingleChapter/SidebarRowSingle';
import WidgetSingle from '../WidgetSinglePage/WidgetSingle';

function SidebarSingle(props) {
    const { chapterID } = useParams();
    const [stack, setStack] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const [contents, setContents] = useState("Course Overview");
    const {setContentsToParent} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/stacks/chapters/' + chapterID)
            .then(res => {
                console.log(res)
                setStack(res.data)
                setLoaded(true)
            })
            .catch(err => console.error(err));
    }, []);

    const exampleFunction = (contentFromChild) => {
        setContents(contentFromChild)
        setContentsToParent(contentFromChild);
    }

    return (
        <div className="sidebar">
            <div className="course_title">
                <p>{loaded && stack.stack.title} </p>
            </div>
            <br></br>
            {loaded && stack.stack.chapter.map((i, idx) => {
                return (
                    <div>
                        {i._id === chapterID
                            ?
                            // <div>{i.title}</div>
                            <CustomAccordion chapterTitle={i.title} section={i.section} exampleFunction={exampleFunction} />
                            : ""
                        }
                    </div>
                )
            }
            )}
            <br></br>

            {/* <WidgetSingle contents={contents.contents} /> */}



{/* 
            <SidebarRowSingle
                title="Requirements"
                logo={<img src="https://assets.codingdojo.com/learn_platform/user/courses/module_sidebar_icons_v2.png"></img>
                }>

            </SidebarRowSingle>

            <SidebarRowSingle
                title="Exams"
                logo={<img src="https://assets.codingdojo.com/learn_platform/user/courses/module_sidebar_icons_v2.png"></img>
                }>

            </SidebarRowSingle>

            <SidebarRowSingle
                title="Academic Honesty"
                logo={<img src="https://assets.codingdojo.com/learn_platform/user/courses/module_sidebar_icons_v2.png"></img>
                }>

            </SidebarRowSingle>

            <SidebarRowSingle
                title="Surveys"
                logo={<img src="https://assets.codingdojo.com/learn_platform/user/courses/module_sidebar_icons_v2.png"></img>
                }>

            </SidebarRowSingle> */}




        </div>);
}

export default SidebarSingle;