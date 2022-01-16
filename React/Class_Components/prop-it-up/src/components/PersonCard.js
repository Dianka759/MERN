import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        const {lastName, firstName, age, hairColor} = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        )
    }
}

export default PersonCard;



// Another Solution //

// import React, { Component } from 'react';
// import classes from './MyNewComponent.module.css';

// class PersonComponent extends Component{
//     render(){
//         return(
//             <div className={classes.card}>
//                 <div className={classes.content}>
//                     <h1>{this.props.lastName}, {this.props.firstName}</h1>
//                     <p>Age: {this.props.age}</p>
//                     <p>Hair Color: {this.props.hairColor}</p>
//                 </div>
//             </div>
//         );

//     }
// }

// export default PersonComponent;