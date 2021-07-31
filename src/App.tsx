import React, {useState} from 'react';
import './App.css';

type Option = {
  optionIndex: number,
}

type Poll = {
  id: number,
  title: string,
}


const getPoll = () => {
  // get the poll here

  const poll = {
    id: 555,
    title: "Who will win the main event at All Out?"
  }

  return poll
}

const getOptions = () => {
  // based on the poll get the options

  const options = [
    {title: "Kenny Omega", totalVotes: 0},
    {title: "Cm Punk", totalVotes: 0}
  ]

  return options
}

const Option = (props: Option) => {
  const [totalVotes, setTotalVotes] = useState(0);

  const submitVote = () => {
    let votes = totalVotes + 1
    setTotalVotes(votes)
  }

  return (
    <>
      <h1>{`Option ${props.optionIndex}`}</h1>
      <button onClick={() => submitVote()}>Vote</button>
      <p>Total votes {totalVotes}</p>
    </>
  )
}


function App(this: any) {
  
  // TODO: leave this here for now reference
  // const submitVote = (optionIndex: number) => {
  //   console.log("HELLO "+ optionIndex)
  // }

  const poll: Poll = getPoll()
  const options = getOptions()

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ poll.title }</h1>
        <Option optionIndex={0} />
        <Option optionIndex={1} />
      </header>
    </div>
  );
}

export default App;
