import React, { useState, Fragment } from 'react'
import ReactDOM from 'react-dom';
import SectionContainer from './SectionContainer';


const Collapsible = (props) => {
    const { chapterTitle, section } = props;
    let [clicked, setClicked] = useState(false);
    let [clicked2, setClicked2] = useState(false);
    const [currentSection, setCurrentSection] = useState("")

    const onClickHandler = (e) => {
        setClicked(clicked = !clicked)
        setCurrentSection("")
    }

    const showContents = (title) => {
        if (clicked2 === false) {
            setClicked2(clicked2 = !clicked2)
        }
        setCurrentSection(title)
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
                                            <p key={idx} className='m-2 border border-danger p-2' onClick={() => showContents(section.title)}> <img src={"https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/b1/a8/1d/b1a81dc9-4b9b-814f-d0ee-fd88f244d041/AppIcon-0-0-85-220-4-2x-0-0.png/1200x630bb.png"} alt="icon" width={"20x"} /> {section.title}</p>
                                            {clicked2
                                                ?
                                                <div style={!clicked2 ? { visibility: "hidden" } : {}}>
                                                    {section.title === currentSection
                                                        ? <div className="border border-primary">
                                                        {/* {ReactDOM.render(<SectionContainer contents={section.contents}/> , document.getElementById('root'))} */}
                                                        {section.subsection.map((contents, idx) => {
                                                            return (
                                                                <div key={idx} className='text-danger'><img src={contents.image} alt="subsection icon" height={"20px"}></img>{contents.title}</div>
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

//     const { chapterTitle, section2, contents, img } = props;
//     const [section, setSection] = useState({
//         title: chapterTitle,
//         contents: ["idk w/e idc anymore man"],
//         selectedSection: ""
//     });

//     const onClickHandler = (index) => {
//         setSection({
//             ...section,
//             selectedSection: index
//         })
//     }

//     return (
//         <div classNameName='container p-3'>
//             <nav className="nav nav-pills nav-justified justify-content-center">
//                 {section.contents.map((content, index) => (
//                     <div className={"nav-item nav-link border border-light bg-dark"} onClick={() => onClickHandler(index)}>
//                         {section.title}
//                     </div>
//                 ))}
//             </nav>

//             <div className="border border-dark bg-success p-2 text-light">
//                 <p>{section.contents && section.contents[section.selectedSection]}</p>
//             </div>
//         </div>
//     )
// }
export default Collapsible;