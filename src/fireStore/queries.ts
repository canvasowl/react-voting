import firebase from "firebase/app";
// import * as firebase from "firebase/app"
import "firebase/analytics";
// import "firebase/auth";
import "firebase/firestore";


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

// IMPORTS ABOVE
// ==================================================================

type User = {
    firstName: string
    lastName: string
    email: string
}

export const addTestUser = (user: User) => {
    // this Firebase Firestore insert call works!
    db.collection("users").add({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    })
    .then((docRef) => {
        console.log(docRef)
        // console.log("Document written with ID: ", docRef.id);
    })
}

export const getPoll = async () => {
    let poll = {id: 555, title: "???"}

    const pollsRef = db.collection("polls")
    await pollsRef.where("active", "==", true).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const pollData = doc.data()

                poll = {...poll, title: pollData.name}
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    return poll
  }
  
export const getOptions = () => {
    // TODO: Get options from Firestore DB

    const options = [
        {title: "Kenny Omega", totalVotes: 0},
        {title: "Cm Punk", totalVotes: 0}
    ]

return options
}

export const persistVote = (optionId: string) => {
    // TODO: Insert vote into Votes collectoin in DB
}