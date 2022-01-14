import React, { useState } from 'react';

const TabContent = (props) => {
    const [tab, setTab] = useState({
        content: ["Hi! I'm tab 1.", "Why Hello there, I'm tab 2.", "Fancy seeing you here, me tab 3."],
        selectedTab: "",
      });

    const onClickHandler = (index) => {
        setTab({
        ...tab,
        selectedTab: index,
        })
    }

    return (
        <div className='container p-3'>
            <nav className= "nav nav-pills nav-justified justify-content-center">
            {tab.content.map((tab, index)=>(
                    <div className= { "nav-item nav-link border border-light bg-dark"} onClick={() => onClickHandler(index)}> 
                    Tab {index + 1}
                    </div>         
                ))}
            </nav>

            <div className="border border-dark mt-5 bg-success p-2 text-light">
            <p>{tab.content[tab.selectedTab]}</p>
            </div>
        </div>
    )
}

export default TabContent;