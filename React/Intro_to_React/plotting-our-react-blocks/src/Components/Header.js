import React, {Component} from "react";

class Header extends Component {
    render() {
        const headerStyle={
            backgroundColor: '#6aa84f',
            height: '5em',
            marginBottom: '1em'
        }
        return (
            <header style={headerStyle}></header>
        )
    }
}

export default Header;