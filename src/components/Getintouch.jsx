import React from 'react'
import contact from '../assets/contact.png';

export default function Getintouch() {
  return (
    <div>
      <div className='getintouch-container'>
        <h1>Get in touch</h1>
        <div className='inner-container'>
            <form className='contact-form'>
                <div className='name-input'>
                    <input type='text' placeholder='First Name' />
                    <input type='text' placeholder='Last Name' />   
                </div>
                <div className='name-input'>
                    <input type='email' placeholder='Email' />
                </div>
                <div className='name-input'>
                    <textarea placeholder='Message' rows={10}></textarea>
                </div>
                <button className='send-btn' type='submit'>Send</button>
            </form>
            <div className='address-container'>
            <img src={contact} alt="contact"></img>
            
                <p>IEEE Uva Wellassa University Student Branch,</p>
                <p>Uva Wellassa University of Sri Lanka,</p>
                <p>Passara road,</p>
                <p>Badulla</p>
                <br></br>
                <p>ieeesbuwu@gmail.com</p>
            </div>
        </div>
      </div>
    </div>
  )
}
