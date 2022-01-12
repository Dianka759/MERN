import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
     <h1>HIELLO</h1> 
      <Box text="Heyyyya ittaa meeeeya" dark={true} />
      <Box text="Heyaa itttaa youuuuaaaa" dark={false} />
      <Box text="yes."  dark={true} />
      <Box text="A POTATO FLEW AROUND ZE ROOM"dark={false} />
      <Box text="hermurgur" dark={true}>
        <h1> WHAT IS THIS </h1>
      </Box>
    </div>
  );
}

export default App;
