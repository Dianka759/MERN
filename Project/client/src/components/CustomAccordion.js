import React, { useState, Fragment } from 'react'
import ReactDOM from 'react-dom';
import SectionContainer from './SectionContainer';

import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { borderTop } from '@mui/system';



function CustomAccordion(props) {
    const { chapterTitle, section, exampleFunction } = props;
    // const [currentSubSection, setCurrentSubSection] = useState("");

    const onClickHandler = (contents) => {
        exampleFunction(contents)
    }

    return (
        <div>
            <p className="text-center"> {chapterTitle}</p>
            {section.map((section, idx) => {
                return (
                    <Accordion style={{backgroundColor:"var(--background)", color:"var(--text-primary)"}}>
                        <AccordionSummary expandIcon={<ExpandMore style={{color:"var(--text-primary)"}} />}>
                            {section.title}
                        </AccordionSummary>
                        {section.subsection.map((contents, idx) => {
                            return (
                                <AccordionDetails onClick={() => onClickHandler(contents)} style={{ borderTop: "1px solid black", color: "gray" }}>
                                    <img src={contents.image} alt="folder icon" />{contents.title}
                                </AccordionDetails>
                            )
                        })}
                    </Accordion>
                )
            })}
        </div>
    );
}

export default CustomAccordion;
