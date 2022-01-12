import React, {Component} from "react";

class Navigation extends Component {
    render() {
        const navigationStyle={
            backgroundColor: 'rgb(111, 168, 220)',
            height: '400px',
            width: '150px',
            verticalAlign: 'top',
            display: 'inline-block'
        }
        return (
            <nav style={navigationStyle}></nav>
        )
    }
}

export default Navigation;