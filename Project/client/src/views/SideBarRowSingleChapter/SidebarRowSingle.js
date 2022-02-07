import React from 'react';
import "../SideBarRow/SidebarRow.css"

function SidebarRow(props) {
    return (

        <div>
            <div className="sidebarRow image">
                {props.logo}
                <h4><a href="">{props.title}</a> </h4>
            </div>
        </div>



    );
}

export default SidebarRow;