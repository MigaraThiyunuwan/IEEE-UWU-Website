import React from 'react'
import logo from '../assets/logo.png';
export default function Description() {
  return (
    <div>
        <div className='description-container'>
            <h1>IEEE Uva Wellassa University <br></br>Student Branch</h1>
            <p>
            The IEEE Student Branch of Uva Wellassa University was established in 2015 and is the 6th student branch in Sri Lanka. Our Student branch has grown to have more than 90 members today securing the 5th place out of 21 student branches with 2 technical chapters and one affinity group. Our Organization enrich professional development of students through organizing many activities. The  core purpose of IEEE Uva Wellassa Student Branch is to serve the society through technological innovations. The executive members of IEEE Uva Wellassa University Student Branch provide technological experience and knowledge by Conducting and engaging students in several activities and  represents the university in IEEE Sri Lanka Section.
            </p>
            <div>
                <img src={logo} alt="UWU IEEE Logo"></img>
            </div>
        </div>
    </div>
  )
}
