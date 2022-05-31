import React from 'react';
import {collection, getFirestore} from "firebase/firestore";
import {doc,getDoc,setDoc} from "firebase/firestore"
import {initializeApp} from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBZ9KPcTzmHK6RQtOmfheIV4BNQxYfEH2E",
  authDomain: "fir-intro-67f63.firebaseapp.com",
  projectId: "fir-intro-67f63",
  storageBucket: "fir-intro-67f63.appspot.com",
  messagingSenderId: "554552257335",
  appId: "1:554552257335:web:449cbc4ae50bad696208b2",
  measurementId: "G-YCCP3397SE"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);


getDoc(doc(db,"responses","aIAVq8U6UPLbBkk1XJBE"))
  .then((doc) => console.log(doc.data))

function App() {

  return (
    <>
      <h1> What is your favorite color?</h1>
      <form>
        <label>
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
