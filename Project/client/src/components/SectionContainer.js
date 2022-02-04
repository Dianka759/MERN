import React, { useEffect, useState } from "react";

const SectionContainer = (props) => {
    const { contents } = props;
    
    return (
        <div className="text-center mt-4">
            <h1> {contents} </h1>
        </div>
    )
}

export default SectionContainer;