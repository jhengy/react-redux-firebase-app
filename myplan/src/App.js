import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"
import DashBoard from "./dashboard/Dashboard"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' component={DashBoard} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
