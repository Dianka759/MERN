import { Slider } from '@mui/material';
import React from 'react';
import "./SidebarRow.css"

function SidebarRow(props) {
    return (
        <div>
            <div className="sidebarRow img" style={{ marginBottom: "20px" }}>
                {props.logo}
                <h4>{props.title} ({props.score})</h4>
            </div>
            {/* <div style={{ marginTop: "-15px", marginBottom: "20px" }}>
                <Slider
                    defaultValue={30}
                    sx={{
                        width: 300,
                        color: 'success.main',
                    }}
                />
            </div> */}
        </div>
    );
}

export default SidebarRow;
