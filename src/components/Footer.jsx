import React from 'react'
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
            <div className="footer-column">
               
                <div className="footerlogo">
                    <img src={logo} alt="UWU IEEE Logo"></img>
                </div>
                <p>The IEEE Student Branch of Uva Wellassa University was established in 2015 and is the 6th student branch in Sri Lanka.</p>
                <div className='footer-icon'>
                    <i class="fa-regular fa-envelope"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
                
            </div>
            <div className="footer-column">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-column1">
                <h3>Contact Us</h3>
                <p>ieeesbuwu@gmail.com</p>
                <p>IEEE Uva Wellassa University Student Branch, <br></br>
                    Uva Wellassa University of Sri Lanka,<br></br>
                    Passara road,<br></br>
                    Badulla</p>
               
            </div>
            <div className="footer-column">
                <h3>Our Location</h3>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2354.7615451418524!2d81.07907184241007!3d6.98321620493084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4618a1a9fec37%3A0x1dd900702229654b!2sUva%20Wellassa%20University%20of%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1723545804768!5m2!1sen!2slk" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <div className='footer-hr'>
        <hr></hr>
        </div>
        
        <div className='footer-copyright'>
            <p>© 2024 - All Rights Reserved</p>
        </div>
    </footer>
    </div>
  )
}
