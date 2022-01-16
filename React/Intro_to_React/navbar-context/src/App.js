import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import Context from './contexts/Context';


function App() {
  return (
    <Wrapper>
      <Navbar />
      <FormWrapper />
    </Wrapper>
  );
}


export default App;
