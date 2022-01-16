import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import TabContent from './components/TabContent';


function App() {
  return (
    <div className= "container mt-5 text-center">
      <h1>Tabs</h1>
      <TabContent />
    </div>
  );
}

export default App;
