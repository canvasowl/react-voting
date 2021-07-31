import React from 'react';
// import logo from './logo.svg';
import './App.css';


type option = {
  optionIndex: number
}

const Option = (props: option) => {
  console.log(props.optionIndex)
  return (
    <h1>{`Option ${props.optionIndex}`}</h1>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Voting</h1>
        <Option optionIndex={1}/>
      </header>
    </div>
  );
}

export default App;
