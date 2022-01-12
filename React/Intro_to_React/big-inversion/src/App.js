import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Georgie"} lastName={"Potat"} age={25} hairColor={"Blonde"} />
      <PersonCard firstName={"John"} lastName={"HotMic"} age={24} hairColor={"Brown"} />
      <PersonCard firstName={"Kiwi"} lastName={"TheGreenChimken"} age={10} hairColor={"Green"} />
    </div>
  );
}

export default App;