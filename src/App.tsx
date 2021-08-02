import React, {useState} from 'react';
import './App.css';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
// import "firebase/auth";
import "firebase/firestore";




// IMPORT ABOVE
//========================================================================================
var firebaseConfig = {
  apiKey: "AIzaSyCxz8wAWw11M1BfBFhywGmduzf9sJmhiGc",
  authDomain: "simple-polls-abbf0.firebaseapp.com",
  projectId: "simple-polls-abbf0",
  storageBucket: "simple-polls-abbf0.appspot.com",
  messagingSenderId: "36007211130",
  appId: "1:36007211130:web:17d059c3b95471f92ccbc3",
  measurementId: "G-9SDE7ZW4M3"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
// LIBRARY CONFIGS ABOVE
//========================================================================================

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


  // this Firebase Firestore insert call works!
  // db.collection("users").add({
  //   firstName: "Jefry",
  //   lastName: "Cruz",
  //   email: "test@test.com"
  // })
  // .then((docRef) => {
  //     console.log("Document written with ID: ", docRef.id);
  // })

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
