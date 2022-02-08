import React from 'react';
import './SubNavigation.css'
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import FormControlLabel from '@mui/material/FormControlLabel';
import MaterialUISwitch from '../../components/MaterialUISwitch'


function SubNavigation(props) {
    const { switchTheme, theme } = props;

    return (
        <div className='sub'>
            <div className='sub__left'>
                <RotateLeftIcon className="rotate__icon" />
                <p>Switch back to Classic Learn</p>
            </div>
            <div className='sub__right'>
                <BookmarkIcon />
                <LiveTvIcon />
                <WarningAmberIcon />
                <span className="toggle">
                    <FormControlLabel
                        onClick={switchTheme}
                        control={<MaterialUISwitch sx={{ m: 1 }} theme={theme} />}
                        label=""
                    />
                </span>
            </div>
        </div>
    );
}

export default SubNavigation;
