import React from 'react';
import "./SidebarRow.css"

function SidebarRow(props) {
    return (

        <div>
            <div className="sidebarRow">
                {props.logo}
                <h4>{props.title} ({props.score})</h4>
            </div>
            {/* <div>
                <h3>Hi hello
                </h3>
            </div> */}
        </div>



    );
}

export default SidebarRow;
