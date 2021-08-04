import {useState, useEffect} from 'react';
import './App.css';
import {getPoll,getOptions,} from './fireStore/queries'
import Option from './components/option/option'


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
