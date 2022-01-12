import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
        age: props.age
        }
    }

    increaseBday = () => { 
        this.setState({ age: this.state.age + 1 })
    }

    render() {
        // const {firstName, lastName, age, hairColor} = this.props
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.increaseBday}> Make {this.props.firstName} Older!</button>
            </div>
        )
    }
}

export default PersonCard;