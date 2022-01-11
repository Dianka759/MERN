import './App.css';
import { Component } from "react";

class App extends Component {    
  render(){        
      return (            
          <div className='container'>              
              <h1>Hello Dojo!</h1>                
              <h3>Things I need to do: </h3>       
              <ul>
                <li>Climb out of bed</li>
                <li>Feed the green chimken</li>
                <li>Learn React</li>
                <li>Play Genshin Impact</li>
                </ul>       
          </div>        
      );    
  }
}

export default App;
