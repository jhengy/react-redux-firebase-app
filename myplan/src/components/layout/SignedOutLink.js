import React from "react"
import { NavLink } from "react-router-dom"

// functional component NavBar routing to different pages
const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log in</NavLink>
      </li>
    </ul>
  )
}

export default SignedOutLinks
