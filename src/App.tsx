import React, {useState, useEffect} from 'react';
import { setConstantValue } from 'typescript';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import { 
  addTestUser,
  getPoll, 
  getOptions, 
  persistVote 
} from './fireStore/queries'


// IMPORT ABOVE
//========================================================================================
type typeOption = {
  optionIndex: number,
  option: any
}

type typePoll = {
  id: number,
  title: string
}

const Option = (props: typeOption) => {
  console.log(props)
  const [totalVotes, setTotalVotes] = useState(props.option.totalVotes);

  const submitVote = () => {
    let votes = totalVotes + 1
    setTotalVotes(votes)
  }

  return (
    <>
      <Router>
        <div className="optionContainer">
          <img src={props.option.img} alt={props.option.title} />
          <h1>{props.option.title}</h1>
          <button onClick={() => submitVote()}>Vote</button>
          <p>Total votes {totalVotes}</p>
        </div>
      </Router>       
    </>
  )
}


function App (this: any) {
  // TODO: leave this here for now reference
  // const submitVote = (optionIndex: number) => {
  //   console.log("HELLO "+ optionIndex)
  // }

  const [poll, setPoll] = useState({id: 0, title: "???"})
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPoll().then((newPoll) => {
      setPoll(newPoll)
      getOptions(newPoll.collectionId).then((newOptions) => {
        setOptions(newOptions)
        setLoading(false)
      })
    })    
  }, [])

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }

  const optionList =  options.map((option, i) => 
    <Option key={i} optionIndex={i} option={option} />
  )

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ poll.title }</h1>
      </header>
      <div id="poll">
        { optionList }
      </div>
    </div>
  );
}

export default App;
