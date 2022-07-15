import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Box } from '@material-ui/core'
import UseAnimations from 'react-useanimations';
// EVERY ANIMATION NEEDS TO BE IMPORTED FIRST -> YOUR BUNDLE WILL INCLUDE ONLY WHAT IT NEEDS
import infinity from 'react-useanimations/lib/infinity'
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
        <UseAnimations animation={infinity} />
    </Box>
  )
  return (
    <Router>
      <Routes>
        {!isLoaded ?
          <>
            <Route path="/account" element={<Account />} />
          </>
          :
          <>
            <Route exact path="/" element={<Home />} />
          </>
        }
      </Routes>
    </Router>
  )
}

export default App