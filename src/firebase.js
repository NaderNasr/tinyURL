import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {

  apiKey: "AIzaSyAECYnYpsFR-g1i_FPkPwId-ReQdnnVez0",

  authDomain: "linkshrtnr-13223.firebaseapp.com",

  projectId: "linkshrtnr-13223",

  storageBucket: "linkshrtnr-13223.appspot.com",

  messagingSenderId: "755545118067",

  appId: "1:755545118067:web:e1ac403e8f7ce203ea2106",

  measurementId: "G-DWNNKFBXY2"

};

const firebase = app.initializeApp(firebaseConfig)
const firestore = firebase.firestore()
const auth = firebase.auth()


export {
  firebase,
  firestore,
  auth
}