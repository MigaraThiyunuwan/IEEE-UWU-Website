import React from 'react'
import agm from '../assets/agm.jfif'
import mountain from '../assets/mountain.png'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to</h1>
                <h2>IEEE UWU</h2>
                <p>Break Barriers. Advance Communities.</p>
                
            </div>
        
        </section>
    

        <div className="hero-image">
                <img src={agm} alt="IEEE UWU Group Photo"></img>
        </div>
        <div className="blue-box"></div>
        <div className="white-box"></div>
        <div className="membership-btn-box"><button className="membership-btn">Get Membership</button></div>
        <div className="mountain">
            <img src={mountain} alt="IEEE UWU Group Photo"></img>
        </div>
    </div>
  )
}
