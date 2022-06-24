import React from 'react';
import "./history_about.css";
import ai from '../../assests/AI-Convergence.bmp';
const History_about = () => {
  return (
    <div className="about_header section__padding" id="about">
    <div className="about_header-content">
    <h1 className="gradient__text">What is A.i.Convergence Thailand</h1> {/* หาวิธีใส่วงเล็บ */}
      <p>A.i.Convergence (Thailand) is a software development business that focuses on reducing the possibility of mistake at each step: vein-to-vein concept, application/web for clinical lab/inventory/blood bank, and patient-centric design software. The address of the company's headquarters is 74 Navamin Road, Ramintra, Khanayoaw, Bangkok, Thailand 10230.</p>
    </div>
    <div className="about_header-image">
      <img src={ai} />
    </div>
  </div>
  )
}
export default History_about