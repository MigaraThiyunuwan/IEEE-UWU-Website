import React from 'react'
import committee1 from '../assets/committee1.jfif';
import committee2 from '../assets/committee2.png';
import member1 from '../assets/member1.png';
import member2 from '../assets/member2.png';
import member3 from '../assets/member3.png';
import member4 from '../assets/member4.png';
import member5 from '../assets/member5.png';
import member6 from '../assets/member6.png';
import member7 from '../assets/member7.png';
import member8 from '../assets/member8.png';
import member9 from '../assets/member9.png';
import member10 from '../assets/member10.png';
import member11 from '../assets/member11.png';
import member12 from '../assets/member12.png';
import member13 from '../assets/member13.png';
import member14 from '../assets/member14.png';


export default function Committee() {
  return (
    <div>
      <div className='committee-container'>
        <h1>Committee</h1>
       <div className='main-members'>
            <img src={committee1} alt="award1"></img>
            <div className='member-details'>
                <h2>Prof. Sandya Kumari</h2>
                <h2>Student Branch Counselor</h2>
                <div className='committee-icon'>
                    <i class="fa-regular fa-envelope"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-facebook"></i>
                </div>
            </div>
       </div>

       <h3>Executive Committee</h3>

       <div className='main-members'>
            <img src={committee2} alt="award1"></img>
            <div className='member-details'>
                <h2>Kavindra Weerasinghe</h2>
                <h2>Chairperson</h2>
                <div className='committee-icon'>
                    <i class="fa-regular fa-envelope"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-facebook"></i>
                </div>
            </div>
       </div>

       
              
      </div>

      <div className='member-container'>

        <div className='member-card'>
          <div className='member-image-container'>
            <div className='members'>
              <img src={member1} alt="member1"></img>
            </div>
            <div className='icon-container'>
              <i class="fa-regular fa-envelope"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-facebook"></i>
            </div>
          </div>
          <h1>Sanjana Attanayake</h1>
          <p>Secretary</p>
        </div>

        <div className='member-card'>
          <div className='member-image-container'>
              <div className='members'>
                <img src={member2} alt="member2"></img>
              </div>
              <div className='icon-container'>
                  <i class="fa-regular fa-envelope"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-facebook"></i>
              </div>
          </div>
            <h1>Lakruwan Jayathissa</h1>
            <p>Treasurer</p>
        </div>

        <div className='member-card'>
          <div className='member-image-container'>
              <div className='members'>
                <img src={member3} alt="member3"></img>
              </div>
              <div className='icon-container'>
                  <i class="fa-regular fa-envelope"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-facebook"></i>
              </div>
          </div>
            <h1>Karunakaran Pradishan</h1>
            <p>Webmaster</p>
        </div>

      </div>

      <div className='member-container'>

            <div className='member-card'>
              <div className='member-image-container'>
                  <div className='members'>
                    <img src={member4} alt="member4"></img>
                  </div>
                  <div className='icon-container'>
                      <i class="fa-regular fa-envelope"></i>
                      <i class="fa-brands fa-linkedin"></i>
                      <i class="fa-brands fa-facebook"></i>
                  </div>
              </div>
              <h1>Asiri Weerasinghe</h1>
              <p>Vice Chairperson</p>
            </div>

            <div className='member-card'>
              <div className='member-image-container'>
                  <div className='members'>
                    <img src={member5} alt="member5"></img>
                  </div>
                  <div className='icon-container'>
                      <i class="fa-regular fa-envelope"></i>
                      <i class="fa-brands fa-linkedin"></i>
                      <i class="fa-brands fa-facebook"></i>
                  </div>
              </div>
              <h1>Chandima Charith</h1>
              <p>Assistant Secretary</p>
            </div>
      </div>
      <hr className='footer-hr'></hr>

          <div className='headingdiv'>
            <h3>Public Visibility Standing Committee</h3>
          </div>

      <div className='member-container'>

        <div className='member-card'>
          <div className='member-image-container'>
            <div className='members'>
              <img src={member6} alt="member6"></img>
            </div>
            <div className='icon-container'>
              <i class="fa-regular fa-envelope"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-facebook"></i>
            </div>
          </div>
          <h1>Lashan Sachintha</h1>
          <p>Head</p>
        </div>

        <div className='member-card'>
          <div className='member-image-container'>
              <div className='members'>
                <img src={member7} alt="member7"></img>
              </div>
              <div className='icon-container'>
                  <i class="fa-regular fa-envelope"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-facebook"></i>
              </div>
          </div>
            <h1>Sadew Hiruditha</h1>
            <p>Member</p>
        </div>

        <div className='member-card'>
          <div className='member-image-container'>
              <div className='members'>
                <img src={member8} alt="member8"></img>
              </div>
              <div className='icon-container'>
                  <i class="fa-regular fa-envelope"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-facebook"></i>
              </div>
          </div>
            <h1>Bumindu Sandeepa</h1>
            <p>Member</p>
        </div>

      </div>
      <hr className='footer-hr'></hr>

      <div className='headingdiv'>
            <h3>Editorial Standing Committee</h3>
          </div>

      <div className='member-container'>

        <div className='member-card'>
          <div className='member-image-container'>
            <div className='members'>
              <img src={member9} alt="member9"></img>
            </div>
            <div className='icon-container'>
              <i class="fa-regular fa-envelope"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-facebook"></i>
            </div>
          </div>
          <h1>Chalani Hansika</h1>
          <p>Head</p>
        </div>

        <div className='member-card'>
          <div className='member-image-container'>
              <div className='members'>
                <img src={member10} alt="member10"></img>
              </div>
              <div className='icon-container'>
                  <i class="fa-regular fa-envelope"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-facebook"></i>
              </div>
          </div>
            <h1>Malithi Shanika</h1>
            <p>Member</p>
        </div>

        <div className='member-card'>
          <div className='member-image-container'>
              <div className='members'>
                <img src={member11} alt="member11"></img>
              </div>
              <div className='icon-container'>
                  <i class="fa-regular fa-envelope"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-facebook"></i>
              </div>
          </div>
            <h1>Bimalka Chamini</h1>
            <p>Member</p>
        </div>

      </div>

      <hr className='footer-hr'></hr>

      <div className='headingdiv'>
            <h3>Membership Development Standing Committee</h3>
          </div>

      <div className='member-container'>

        <div className='member-card'>
          <div className='member-image-container'>
            <div className='members'>
              <img src={member12} alt="member12"></img>
            </div>
            <div className='icon-container'>
              <i class="fa-regular fa-envelope"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-facebook"></i>
            </div>
          </div>
          <h1>Chalani Hansika</h1>
          <p>Head</p>
        </div>

        <div className='member-card'>
          <div className='member-image-container'>
              <div className='members'>
                <img src={member13} alt="member13"></img>
              </div>
              <div className='icon-container'>
                  <i class="fa-regular fa-envelope"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-facebook"></i>
              </div>
          </div>
            <h1>Malithi Shanika</h1>
            <p>Member</p>
        </div>

        <div className='member-card'>
          <div className='member-image-container'>
              <div className='members'>
                <img src={member14} alt="member14"></img>
              </div>
              <div className='icon-container'>
                  <i class="fa-regular fa-envelope"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-facebook"></i>
              </div>
          </div>
            <h1>Bimalka Chamini</h1>
            <p>Member</p>
        </div>

      </div>
      
    </div>
  )
}
