import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, Firestore, getFirestore } from 'firebase/firestore/lite';
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";


const firebaseConfig = {

  apiKey: process.env.REACT_API_KEY,


  authDomain: process.env.REACT_AUTH_DOMAIN,


  projectId: process.env.REACT_PROJECT_ID,


  storageBucket: process.env.REACT_BUCKET,


  messagingSenderId: process.env.REACT_MESSENGING_ID,


  appId: process.env.REACT_APP_ID,


  measurementId: process.env.REACT_MESURMENT_ID


  

};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth(firebase);

// console.log(process.env.NODE_ENV)
const developmentENV = process.env.NODE_ENV
if (developmentENV === 'development') {
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectAuthEmulator(auth, "http://localhost:9099");
}

export {
  firebase,
  db,
  auth
}