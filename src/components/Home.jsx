import React, { useState, useEffect } from 'react';
import agm from '../assets/agm.jfif'
import agm1 from '../assets/agm2.jfif'
import agm2 from '../assets/agm3.jfif'
import agm3 from '../assets/agm4.jfif'
import agm4 from '../assets/agm5.jfif'
import agm5 from '../assets/agm6.jfif'
import agm6 from '../assets/agm7.jfif'
import mountain from '../assets/mountain.png'


export default function Home() {
  const images = [agm, agm1, agm2,agm3,agm4,agm5,agm6]; // Array of images for the slideshow
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);
  return (
    <div>
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to</h1>
                <h2>IEEE UWU</h2>
                <p>Break Barriers. Advance Communities.</p>
                
            </div>
        
        </section>
    
        <div className="hero-image">
                <img src={images[currentImage]} alt="IEEE UWU Group Photo"></img>
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
