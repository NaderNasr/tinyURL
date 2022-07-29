import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom"
import { Box } from '@material-ui/core'
import UseAnimations from 'react-useanimations';
// EVERY ANIMATION NEEDS TO BE IMPORTED FIRST -> YOUR BUNDLE WILL INCLUDE ONLY WHAT IT NEEDS
import loading2 from 'react-useanimations/lib/loading2'
import { auth } from './firebase'

import Account from "./components/Account/Account"
import Home from "./components/Home/Home"

import './App.css'

const App = () => {

  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true)

  useEffect(() => {
    auth.onAuthStateChanged((isAuthenticated) => {
      setUser(isAuthenticated)
      setIsLoaded(false)
    })
  }, []);

  if (isLoaded) return (
    <Box mt={5} display='flex' justifyContent='center'>
      <UseAnimations animation={loading2} size={75} />
    </Box>
  )

  // console.log(user)
  return (
    <Router>
      {!user ? <Link to='/'>Home</Link> : <Link to='/account'>Account</Link>}
      <Routes>
        <Route exact path="/" element={!user ? <Home/> : <Account />} />
      </Routes>
    </Router>
  )
}

export default App