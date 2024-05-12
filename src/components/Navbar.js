import React from "react";
import './css/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className="outernavbar">
        <div className="navbar">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>        <li class="nav-item">
            <Link class="nav-link" to="/Faculty">Faculty</Link>
          </li>        <li class="nav-item">
            <Link class="nav-link" to="/Experience">Experience</Link>
          </li>        <li class="nav-item">
            <Link class="nav-link" to="/Registration">Registration</Link>

          </li>
        </div>
      </nav>
    </>
  )
}
export default Navbar;