import React from 'react'
import { BrowserRouter as Router, Routes, Switch, Route } from "react-router-dom"
import Account from "./components/Account/Account"
import Home from "./components/Home/Home"

const App = () => {
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