import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


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

export {
  firebase,
  db,
  auth
}