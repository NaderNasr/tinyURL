import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Account from "./components/Account/Account"
import Home from "./components/Home/Home"

import {auth} from './firebase'

const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((isAuthenticated) => {
       setUser(isAuthenticated)
    })
  }, []);


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/account" element={<Account />}/>
      </Routes>
    </Router>
  )
}

export default App