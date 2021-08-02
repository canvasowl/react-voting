import React, {useState} from 'react';
import { setConstantValue } from 'typescript';
import './App.css';
import { 
  addTestUser,
  getPoll, 
  getOptions, 
  persistVote 
} from './fireStore/queries'


// IMPORT ABOVE
//========================================================================================
type Option = {
  optionIndex: number,
}

type Poll = {
  id: number,
  title: string
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


function App (this: any) {
  // TODO: leave this here for now reference
  // const submitVote = (optionIndex: number) => {
  //   console.log("HELLO "+ optionIndex)
  // }

  const [poll, setPoll] = useState({id: 0, title: "???"})
  const [loading, setLoading] = useState(true)

  if (loading) {
    getPoll().then((newPoll) =>{
      setLoading(false)
      setPoll(newPoll)
    })    
  }

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }

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
