import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './components/Box';
import Counter from './components/Counter';
import Row from './components/Row';
import ClassCounter from './components/ClassCounter';
import FunctionalCounter from './components/FunctionalCounter';
import TraditionalForm from './components/TraditionalForm';
import SimpleForm from './components/SimpleForm';
import { useState } from 'react';

function App() {
  const [words, setWords] = useState(["hash browns", "home fries", "tater wedges", "yucca", "scalloped potatoes"])


  return (
    <div className="App">
      {/* <h1>HIELLO</h1> 
      <Box text="Heyyyya ittaa meeeeya" dark={true} />
      <Box text="Heyaa itttaa youuuuaaaa" dark={false} />
      <Box text="yes."  dark={true} />
      <Box text="A POTATO FLEW AROUND ZE ROOM"dark={false} />
      <Box text="hermurgur" dark={true}>
        <h1> WHAT IS THIS </h1>
      </Box> */}

      {/* <h1> hey ita me 2.0</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/> */}


      {/* <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row /> */}



      {/* <ClassCounter start={10} />
      <FunctionalCounter start={100} /> */}



      {/* <TraditionalForm/> */}
      {/* <SimpleForm /> */}


      {
        words.map((str) => {
          return <marquee><h1>{str} are delishhh!</h1></marquee>
        })
      }

    </div>
  );
}

export default App;
