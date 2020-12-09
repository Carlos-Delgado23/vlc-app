import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import HomePage from './pages/homepage/HomePage'

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/hats" component={HatsPage} /> */}
      </Switch>


    </div>
  )
}

export default App
