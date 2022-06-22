import React from 'react'
import './team.css'
const Team = () => {
  return (
    <div className='subtittle section__padding'>
        <h1 className='subtitle '>Our Team</h1>
        <div class="container ">
            <div class="card">
                <figure>
                    {/* <img src="http://localhost:8000/M.jpg" alt="Profile image"> */}
                </figure>
                <p class="name">Waris Damkham</p>
                <p class="role">6388014 Sec 1</p>
                <div class="separator" />
                <div class="social-container">
                    <p class="role">Mahidol University</p>
                </div>
            </div>
            <div class="card">
                <figure>
                    {/* <img src="http://localhost:8000/Mind.jpg" alt="Profile image"> */}
                </figure>
                <p class="name">Chalumphu Atjarit</p>
                <p class="role">6388020 Sec 1</p>
                <div class="separator" />
                <div class="social-container">
                    <p class="role">Mahidol University</p>
                </div>
            </div>
            <div class="card">
                <figure>
                    {/* <img src="http://localhost:8000/Tai.jpg" alt="Profile image"> */}
                </figure>
                <p class="name">Pattanan Korkiattrakool</p>
                <p class="role">6388022 Sec 1</p>
                <div class="separator" />
                <div class="social-container">
                    <p class="role">Mahidol University</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team
