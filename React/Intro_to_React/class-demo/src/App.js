import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Box from './components/Box';
import Counter from './components/Counter';
import Row from './components/Row';
import ClassCounter from './components/ClassCounter';
import FunctionalCounter from './components/FunctionalCounter';
import TraditionalForm from './components/TraditionalForm';
import SimpleForm from './components/SimpleForm';
import Step from './components/Step';
import Home from './views/Home';
import Second from './views/Second';
import Form from './views/Form';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


function App() {
  const [steps, setSteps] = useState([]);
  const [direction, setDirection] = useState("left");
  const [text, setText] = useState("");

  const displaySteps = (step, i) => {
    return <li key={i}>Direction: {step.direction} Text: {step.text}</li>
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newStep = {
      direction,
      text
    };

    setSteps([...steps, newStep])
  }

  const onDeleteHandler = (index) => {
    console.log(`trying to delete item #${index}`);
    // const newArray =
    //   [...steps];
    // newArray.splice(index, 1);

    // newArray[index].text = "edited";

    const newArray = [
      ...steps.slice(0, index),
      ...steps.slice(index + 1)
    ]

    setSteps(newArray);
  }

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

      {/* 
      {
        words.map((str) => {
          return <marquee><h1>{str} are delishhh!</h1></marquee>
        })
      } */}

      {/* 
      <div className='App w-50 mx-auto'>
        <form onSubmit={onSubmitHandler}>
          <div className='row'>
            <div className='col'>
              <select className='form-select' onChange={(event) => { setDirection(event.target.value) }}>
                <option value="left">left</option>
                <option value="right">right</option>
                <option value="forward">forward</option>
                <option value="backwards">backwards</option>
              </select>
            </div>
            <div className='col'>
              <input type="text" placeholder='directions here...' className='form-control' onChange={(event) => { setText(event.target.value) }} />
            </div>
          </div>
          <input type="submit" className='btn btn-success mb-4'></input>
        </form>
      </div>

      {
        steps.map((step, i) => {
          return <Step key={i} index={i} text={step.text} direction={step.direction}
            onDeleteHandler={onDeleteHandler} />
        })
      } */}


      {/* //////////////ROUTING/////////////////////////// */}
      <BrowserRouter>
      <div id="header" className='d-flex justify-content-between w-50 mx-auto border p-2'>
      <Link to="/">Main</Link>
      <Link to="/form">Form</Link>
      <Link to="/second/bigpig/hotpink">BIGPIG</Link>
      </div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/second/:word/:color'>
            <Second />
          </Route>
          <Route exact path='/form'>
            <Form />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
