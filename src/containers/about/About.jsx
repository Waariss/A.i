import React from 'react'
import Feature from '../../components/feature/Feature';
import './about.css'
const About = () => {
  return(
  <div className="ai_about section__margin" id="ai">
    <div className="ai_about-feature">
      <Feature url="/A.i/History#about" title="What is A.i.Convergence Thailand" text="A.i.Convergence (Thailand) is a software development business that focuses on reducing the possibility of mistake at each step: vein-to-vein concept, application/web for clinical lab/inventory/blood bank, and patient-centric design software. The address of the company's headquarters is 74 Navamin Road, Ramintra, Khanayoaw, Bangkok, Thailand 10230." />
    </div>
    <div className="ai_about-heading">
      <h1>About A.i.Convergence Thailand</h1>
      <p><a href='/A.i/History'>Explore A.i.Technology</a></p>
    </div>
    <div className="ai_about-container">
      <Feature url="/A.i/History#about" title="Our History" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature url="/A.i/History#team" title="Our Team" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      {/* <Feature url="/A.i/History#team" title="Location" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." /> */}
      <Feature url="/A.i/History#info" title="Vision" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature url="/A.i/History#info" title="Workplace Policies" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
  )
}

export default About
