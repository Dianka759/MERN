import React, {Component} from "react";

class Main extends Component {
    render() {
        const mainStyle={
            backgroundColor: '#e06666',
            padding: '2em 2em 2em 0',
            marginLeft: '1em',
            display: 'inline-block'
        }
        return (
            <main style={mainStyle}>
                { this.props.children }
            </main>
        )
    }
}

export default Main;