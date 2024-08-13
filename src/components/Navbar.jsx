import React from 'react'
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <div>
      <header>
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="UWU IEEE Logo"></img>
            </div>
            <ul className="nav-links">
                <li className="active"><a className = "active" href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Entities</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Committee</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    </header>
    </div>
  )
}
