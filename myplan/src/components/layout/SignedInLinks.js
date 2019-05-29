import React from "react"
import { NavLink } from "react-router-dom"

// functional component NavBar routing to different pages
const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating blue lighten-1">
          Hengyuan
        </NavLink>
      </li>
    </ul>
  )
}

export default SignedInLinks
