import { useState } from 'react';
import './App.css';
import User from './Component/Users/User';

function App() {
  const [familiar, setFamiliar] = useState(false);

  return (
    <div className="App">
      <h1>Current Value : {familiar.toString()}</h1>
      <button onClick={() =>setFamiliar(!familiar)}>Toggle</button>
      <User familiar={familiar}></User>
    </div>
  );
}

export default App;
