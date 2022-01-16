import React, {Component} from "react";

class SubContents extends Component {
    render() {
        const subContentsStyle={
            backgroundColor: 'rgb(255, 217, 102)',
            display: 'inline-block',
            marginLeft: '2em',
            marginBottom: '2em',
            height: '250px',
            width: '160px'
        }
        
        return (
            <section style={subContentsStyle}></section>
        )
    }
}

export default SubContents;