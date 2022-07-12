import React from 'react'
import "./recruit.css"
<img src = '../assests/AI-Convergence.bmp'></img>
const recruit = () => {
  return (
    <div className='job_dev section__margin'>
        <div className='job_title'>
            <h1 className="gradient__text">Software Specialist</h1>
        </div>
        <div className='job_high'>
            {/* <h2>High-light</h2> */}
            <button type="button" class="buttona">    
                <p className='le'>User software training</p>
                <p>Co-implement software installation</p>
                <p>Product demonstrations/ Training programs</p>
                <p className='rig'>Customer support</p>
            </button>
            {/* <button role="button" class="buttona">
                <span>Product demonstrations/ Training programs </span>
            </button>
            <button role="button" class="buttona">
                <span>Customer support</span>
            </button> */}
        </div>
        <div className='job_des'>
            <h2>Job description</h2>
            <div />
            <ul>
                <il>Responsible for customer/site visits, product demonstrations, training/education programs, product in-services, and provide basic trouble shooting for software using and problem resolutions</il>
                <il>Assist with the business for Software Implementation projects</il>
                <il>Co-implement Software Installation</il>
                <il>Assist in the handover of all implementation projects to users</il>
                <il>Customer support via call and provide basic trouble shooting</il>
            </ul>
        </div>
        <div className='job_qual'>
            <h2>Qualifications</h2>
            <div />
            <ul>
                <il>Bachelor’s degree</il>
                <il>Good computer skills</il>
                <il>Able to work in Bangkok and upcountry</il>
                <il>Strong analytical and problem-solving skills </il>
                <il>Possess excellent communication and interpersonal skills</il>
                <il>Good analytical and conceptual thinking skills</il>
                <il>Ability to work independently and mature</il>
                <il>Able to work under pressure and meet tight schedules </il>
                <il>Punctuality, Diligent, patient, enthusiastic, honest, self-discipline, positive thinking and complete with service mind </il>
                <il>Pleasant personality, good human relation and co-ordination and a team player</il>
            </ul>
        </div>
    </div>
  )
}

export default recruit
