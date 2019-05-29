import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import DashBoard from "./components/dashboard/Dashboard"
import ProjectDetails from './components/projects/ProjectDetails'

function App() {
  // note that app is separated into Navbar and body page where the body page are different routed components
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={DashBoard} />
          <Route path='/projects/:id' component={ProjectDetails}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
