import React, { Component } from "react"
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
// class based component(with states)
/**
 * 1. initially use mock data to write out the component(without dynamic data)
 */
class Dashboard extends Component {
  render() {
    return (
      // two rows with 2 columns of m6 and m5 column width respectively
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard