import React, { useState } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home'); 

  const handleScroll = (event, id) => {
    event.preventDefault(); 
    setActiveLink(id); 
    const element = document.getElementById(id);
    const yOffset = -90; 
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div>
      <header>
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="UWU IEEE Logo"></img>
            </div>
            <ul className="nav-links">
                <li>
                  <a 
                    href="#home" 
                    className={activeLink === 'home' ? 'active' : ''}
                    onClick={(e) => handleScroll(e, 'home')}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about-us" 
                    className={activeLink === 'about-us' ? 'active' : ''}
                    onClick={(e) => handleScroll(e, 'about-us')}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#entities" 
                    className={activeLink === 'entities' ? 'active' : ''}
                    onClick={(e) => handleScroll(e, 'entities')}
                  >
                    Entities
                  </a>
                </li>
                <li>
                  <a 
                    href="#events" 
                    className={activeLink === 'events' ? 'active' : ''}
                    onClick={(e) => handleScroll(e, 'events')}
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a 
                    href="#committee" 
                    className={activeLink === 'committee' ? 'active' : ''}
                    onClick={(e) => handleScroll(e, 'committee')}
                  >
                    Committee
                  </a>
                </li>
                <li>
                  <a 
                    href="#getintouch" 
                    className={activeLink === 'getintouch' ? 'active' : ''}
                    onClick={(e) => handleScroll(e, 'getintouch')}
                  >
                    Contact Us
                  </a>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  );
}
