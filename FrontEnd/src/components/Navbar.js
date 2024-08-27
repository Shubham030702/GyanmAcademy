import React, { useEffect } from 'react';
import './css/Navbar.css'
import { openNav, closeNav } from './Nav.js';

import { Link } from 'react-router-dom'
const Navbar = () => {
  useEffect(() => {
    document.querySelector('.menu-btn').addEventListener('click', openNav);

    return () => {
      document.querySelector('.menu-btn').removeEventListener('click', openNav);
    };
  }, []);
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
        <button className="menu-btn">&#9776;</button>
      <div className="sidenav" id="mySidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <li class="nav-item">
            <Link class="nav-link" to="/" onClick={closeNav}>Home</Link>
          </li>        <li class="nav-item">
            <Link class="nav-link" to="/Faculty" onClick={closeNav}>Faculty</Link>
          </li>        <li class="nav-item">
            <Link class="nav-link" to="/Experience" onClick={closeNav}>Experience</Link>
          </li>        <li class="nav-item">
            <Link class="nav-link" to="/Registration" onClick={closeNav}>Registration</Link>

          </li>
      </div>
      </nav>
    </>
  )
}
export default Navbar;