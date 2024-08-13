import React from 'react'
import left from '../assets/left.png'
import right from '../assets/right.png'
import ieee from '../assets/ieee.png'

export default function IEEELogo() {
  return (
    <div>
      <div className='ieee-logo'>
      <img src={left} alt="UWU IEEE Logo"></img>
      
      <div className='ieee-logo-mid'>
        <img src={ieee} alt="UWU IEEE Logo"></img>
      </div>

      <img src={right} alt="UWU IEEE Logo"></img>
      </div>
    </div>
  )
}
