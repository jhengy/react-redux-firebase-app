import React, { Component } from 'react'

/**
 * 1. create the template with email, password inputs and button element
 * 2. create states and update state using event handler
 */
class Signin extends Component {
  state = {
    email: '',
    password: ''
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
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Signin
