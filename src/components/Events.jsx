import React from 'react'
import flayer1 from '../assets/flayer1.png';
import flayer2 from '../assets/flayer2.jfif';
import flayer3 from '../assets/flayer3.jfif';

export default function Events() {
  return (
    <div>
      <div className='event-container'>
        <h1>Events</h1>
        <div className='event-card-container'>
            <div className='btn-prev'>
            <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div className='event-card'>
                <img src={flayer1} alt="flayer1"></img>
                <div className='event-date'>10-jul-2024</div>
                <div className='event-title'>Technosphere</div>
                <p>Workshop on industry visionaries and it is organized by IAS chapter of IEEE UWU SB.</p>
                <button>See more <i class="fa-solid fa-caret-down"></i></button>

            </div>
            <div className='event-card'>
                <img src={flayer2} alt="flayer2"></img>
                <div className='event-date'>10-jul-2024</div>
                <div className='event-title'>INSL</div>
                <p>Workshop on industry visionaries and it is organized by IAS chapter of IEEE UWU SB.</p>
                <button>See more <i class="fa-solid fa-caret-down"></i></button>

            </div>
            <div className='event-card'>
                <img src={flayer3} alt="flayer3"></img>
                <div className='event-date'>10-jul-2024</div>
                <div className='event-title'>Technosphere</div>
                <p>Workshop on industry visionaries and it is organized by IAS chapter of IEEE UWU SB.</p>
                <button>See more <i class="fa-solid fa-caret-down"></i></button>

            </div>
            <div className='btn-next'>
            <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>

        <button className='event-seemore-btn'>See More</button>
      </div>
    </div>
  )
}
