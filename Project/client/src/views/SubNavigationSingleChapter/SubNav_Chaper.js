import React from 'react';
import '../SubNavigationSingleChapter/SubNav_Chapter.css'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import FormControlLabel from '@mui/material/FormControlLabel';
import MaterialUISwitch from '../../components/MaterialUISwitch'
function SubNav_Chapter(props) {
    const { switchTheme, theme } = props;

    return (
        <div className="sub">
            <div className='sub__left'>
                <a href="">Tracks</a>
                <a href="">Course</a>
                <a href="">Assignment Checklist</a>
                <a href="">Belt Exam History</a>
                <a href="">Take Exams</a>
            </div>
            <div className='sub__right'>
                <BookmarkIcon />
                <LiveTvIcon ></LiveTvIcon>
                <WarningAmberIcon ></WarningAmberIcon>
                <span className="toggle">
                    <FormControlLabel
                        onClick={switchTheme}
                        control={<MaterialUISwitch sx={{ m: 1 }} theme={theme} />}
                        label=""
                    />
                </span>
            </div>
        </div>);
}

export default SubNav_Chapter;