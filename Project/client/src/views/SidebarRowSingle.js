import React from 'react';
import "./SidebarRow.css"

function SidebarRow(props) {
    return (

        <div>
            <div className="sidebarRow">
                {props.logo}
                <h4><a href="">{props.title}</a> </h4>
            </div>
        </div>



    );
}

export default SidebarRow;