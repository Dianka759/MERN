import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard lastName={"Doe"} firstName={"Jane"} age={45} hairColor={"Black"} />
        <PersonCard lastName={"Smith"} firstName={"John"} age={88} hairColor={"Brown"} />
        <PersonCard lastName={"Fillmore"} firstName={"Millard"} age={50} hairColor={"Brown"} />
        <PersonCard lastName={"Smith"} firstName={"Maria"} age={62} hairColor={"Brown"} />
    </div>
  );
}

// Another Solution //

// import PersonComponent from './components/MyNewComponent';
// var peopleArr =[
//   {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
//   {"firstName":"John", "lastName":"Smith","age":88,"hairColor":"Brown"},
//   {"firstName":"Millard", "lastName":"Fillmore","age":50,"hairColor":"Brown"},
//   {"firstName":"Maria", "lastName":"Smith","age":62,"hairColor":"Brown"}
// ]

// function App() {
//   return (
//     <div className="App">

//       {peopleArr.map(person => {
//         return <PersonComponent firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
//       })
      
//       }

//     </div>
//   );
// }

export default App;
