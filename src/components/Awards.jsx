import React, { useState, useEffect } from 'react';
import award1 from '../assets/award1.png';
import award2 from '../assets/award2.png';
import award3 from '../assets/award3.png';

export default function Awards() {
  const awards = [award1, award2, award3];
  const [currentAward, setCurrentAward] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAward((prevAward) => (prevAward + 1) % awards.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId);
  }, [awards.length]);

  return (
    <div className='awards-container'>
        <h1>Awards</h1>
        <div className='awards-image-container'>
          <img className='award1' src={award1} alt="award1"></img>
          <img className='award2' src={awards[currentAward]} alt="award2"></img>
          <img className='award3' src={award3} alt="award3"></img>
        </div>
      </div>
  );
}



{/* <div className='awards-container'>
        <h1>Awards</h1>
        <div className='awards-image-container'>
          <img className='award1' src={award1} alt="award1"></img>
          <img className='award2' src={award2} alt="award2"></img>
          <img className='award3' src={award3} alt="award3"></img>
        </div>
      </div> */}