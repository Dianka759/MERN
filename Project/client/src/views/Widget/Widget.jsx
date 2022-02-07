import React from 'react';
import './Widget.css'
import Card from '../Card/Card';
import Banner from '../Banner/Banner';
import MERN from '../../img/MERN.png'
import Python from '../../img/Python.png'
import career from '../../img/career.png'
import WebFund from '../../img/WebFund.png'
import Java from '../../img/Java.png'

const Widget = (props) => {
    const { stacks } = props;

    return (
        <div className="widget">
            <a href="" id="tracks_link">Tracks</a>
            <a href="" id="continue_link">continue learning</a>
            <Banner />

            {/*  */}
            <h5>Your Major Tracks</h5>
            <div className="widget__section">
                {stacks.map((stack, idx) =>
                    <Card
                        id={stack.stack._id}
                        src={stack.stack.image}
                        title={stack.stack.title} />
                )}
            </div>
            
            <div className="widget__section">
                <Card
                    src={career}
                    title="CAREER SERVICES: FULL-TIME ONSITE & ONLINE" />
                <Card
                    src={WebFund}
                    title="WEB FUNDAMENTALS (2021)" />
            </div>
            <div className="widget__section">
                <Card
                    src={Java}
                    title="Java" />
            </div>
        </div>);
}

export default Widget;
