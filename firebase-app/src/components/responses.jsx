import React from 'react';
import {collection, getFirestore} from "firebase/firestore";
import {doc,getDoc,setDoc} from "firebase/firestore"
import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);



export default function responses() {
    return(
        <>
          <h1>What's your favorite color?</h1>
        </>
    )
}