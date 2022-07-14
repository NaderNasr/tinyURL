import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


const firebaseConfig = {

  apiKey: process.env.REACT_APIKEY,

  authDomain: process.env.REACT_AUTHDOMAIN,

  projectId: process.env.REACT_PROJECTID,

  storageBucket: process.env.REACT_BUCKET,

  messagingSenderId: process.env.REACT_MESSENGINGID,

  appId: process.env.REACT_APPID,

  measurementId: process.env.REACT_MESURMENTID

};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth(firebase);

export {
  firebase,
  db,
  auth
}