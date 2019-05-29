import React, { Component } from 'react'

/**
 * 1. create the template with email, password inputs and button element
 * 2. create states and update state using event handler
 */
class Signup extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    LastName:''
  }
  
  handleChange = (e) => {
    // console.log(e)
    this.setState({
      // this is why we set id of input fields to be their name
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    // console.log(e)
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup
