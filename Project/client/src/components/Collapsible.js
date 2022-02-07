import React, { useState, Fragment } from 'react'
import ReactDOM from 'react-dom';
import SectionContainer from './SectionContainer';

// import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import WidgetSingle from '../views/WidgetSinglePage/WidgetSingle';


const Collapsible = (props) => {
    const { chapterTitle, section } = props;
    let [clicked, setClicked] = useState(false);
    let [clicked2, setClicked2] = useState(false);
    const [currentSection, setCurrentSection] = useState("");
    const [currentSubSection, setCurrentSubSection] = useState("");

    const onClickHandler = (e) => {
        setClicked(clicked = !clicked)
        setCurrentSection("")
    }

    const showContents = (title, subSectionTitle) => {
        if (clicked2 === false) {
            setClicked2(clicked2 = !clicked2)
        }
        setCurrentSection(title)
        setCurrentSubSection(subSectionTitle)
    }

    const createMarkUp = (info) => {
        return { __html: info.contents }
    }

    return (
        <>
            <div className='d-flex text-center'>
                <div>
                    <button className='m-2 btn btn-outline-primary' onClick={onClickHandler}><img src={"https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/b1/a8/1d/b1a81dc9-4b9b-814f-d0ee-fd88f244d041/AppIcon-0-0-85-220-4-2x-0-0.png/1200x630bb.png"} alt="icon" width={"20x"} />{chapterTitle}</button>
                    {clicked
                        ?
                        <>
                            <div style={!clicked ? { visibility: "hidden" } : {}}>
                                {section.map((section, idx) => {
                                    return (
                                        <div key={idx}>
                                            <p key={idx} className='m-2 border border-danger p-2' onClick={() => showContents(section.title)}> <img src={"https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/b1/a8/1d/b1a81dc9-4b9b-814f-d0ee-fd88f244d041/AppIcon-0-0-85-220-4-2x-0-0.png/1200x630bb.png"} alt="icon" width={"20x"} /> {section.title} </p>
                                            {
                                                clicked2
                                                    ?
                                                    <div style={!clicked2 ? { visibility: "hidden" } : {}}>
                                                        {section.title === currentSection
                                                            ? <div className="border border-primary">
                                                                {section.subsection.map((contents, idx) => {
                                                                    return (
                                                                        <>
                                                                        
                                                                            <div className='float-right'>
                                                                                
                                                                                {/* <div dangerouslySetInnerHTML={createMarkUp(contents)} /> */}
                                                                                {/* <WidgetSingle contents={contents}></WidgetSingle> */}
                                                                            </div>
                                                                        </>
                                                                        // <div key={idx} className='text-danger'><img src={contents.image} alt="subsection icon" height={"20px"}></img>{contents.title}</div>
                                                                    )
                                                                })}
                                                            </div>
                                                            : ""
                                                        }
                                                    </div>
                                                    : ""
                                            }
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </>
                        : ""
                    }
                </div>
            </div>
        </>
    )
}

export default Collapsible;