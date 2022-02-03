import React from 'react';
import '../views/SubNavigation.css'
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

function SubNavigation() {
    return (
        <div className='sub'>


            <div className='sub__left'>
                <RotateLeftIcon className="rotate__icon" />
                <p>Switch back to Classic Learn</p>
            </div>
            <div className='sub__right'>
                <BookmarkIcon />
                <LiveTvIcon ></LiveTvIcon>
                <WarningAmberIcon ></WarningAmberIcon>
                <span className="toggle">
                    <ToggleOnIcon ></ToggleOnIcon>
                </span>
            </div>
        </div>
    );
}

export default SubNavigation;
