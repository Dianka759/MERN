import React from 'react';
import '../Widget/Widget.css'
import Card from '../Card/Card';

function WidgetSingle(props) {
    const { contents } = props;

    return (
        <div style={{ backgroundColor: 'var(--mainBackground)' }} >
                <div className="p-5" dangerouslySetInnerHTML={{ __html: contents }}></div>


            {/* <div className="widget_Single">


                <p id="lesson_content">Rules</p>


                <div className="lesson_image">
                    <img
                        src={"https://s3.us-east-1.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/1619804205__heylagostechie-kwzWjTnDPLk-unsplash.jpg"}
                    />
                </div> */}

            {/* </div> */}

            {/* <ul id="rules_card">
                    <li>Be Present</li>
                    <li>Be Humble</li>
                    <li>Be Strength through Struggle</li>
                </ul>


                <p id="lesson_content">Professionalism</p>
                <ul id="rules_card">
                    <li>Do not use explicit language on/through any Coding Dojo resource</li>
                </ul>

                <p id="lesson_content">Zero Tolerance</p>

                <div>
                    <img className="narrow_image"
                        src={"https://s3.us-east-1.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/1619804522__jon-tyson-2TzSuQZOHe4-unsplash.jpg"}
                    />
                </div>
                <ul id="rules_card">
                    <li>Disrespect</li>
                    <li>Negative Attitude</li>
                    <li>Dishonesty
                        <ul>
                            <li>Cheating on Assignments (pair programming is encouraged, you should still be writing your own code, not copy/pasting your classmates work, this also helps you better retain the information</li>
                            <li>Cheating on Exams (upon review, may result to immediate expulsion)</li>
                        </ul>

                    </li>
                </ul>
            </div>
        </div > */}
        </div >


    );
}

export default WidgetSingle;