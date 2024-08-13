import React from 'react'
import ias from '../assets/ias.png';
import ras from '../assets/ras.png';

export default function Entities() {
  return (
    <div>
      <div className='entity-container'>
        <h1>Entities</h1>
        <p>Follow your passion with IEEE Affinity Groups and Chapter Societies at IEEE UWU SB</p>
        <div className='entity-row'>
            <div className='entity-card'>
                <div className='entity-image-container'>
                    <img src={ias} alt="UWU IEEE Logo"></img>
                </div>
                <button>Visit Us</button>
            </div>

            <div className='entity-card'>
            <div className='entity-image-container'>
                    <img src={ras} alt="UWU IEEE Logo"></img>
                </div>
                <button>Visit Us</button>
            </div>
        </div>
        <div className='entity-row'>
            <div className='entity-card'>
                <div className='entity-image-container'>
                    <img src={ias} alt="UWU IEEE Logo"></img>
                </div>
                <button>Visit Us</button>
            </div>

            <div className='entity-card'>
            <div className='entity-image-container'>
                    <img src={ras} alt="UWU IEEE Logo"></img>
                </div>
                <button>Visit Us</button>
            </div>
        </div>
      </div>
    </div>
  )
}
