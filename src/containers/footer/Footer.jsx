import React from 'react';
import ai from '../../assests/AI-Convergence.bmp';
import './footer.css';
const Footer = () => (
  <div className="ai_footer section__padding">
    {/* <div className="ai_footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div> */}
    <div className="ai_footer-links">
      <div className="ai_footer-links_logo">
        <img src={ai} alt="gpt3_logo" />
        <p>Copyright (C) A.i.Convergence(Thailand).Co.,LTD, <br /> All Rights Reserved</p>
      </div>
      <div className="ai_footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="ai_footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="ai_footer-links_div">
        <h4>Get in touch</h4>
        <p>74 Navamin Road, Ramintra, Khanayoaw, Bangkok, Thailand 10230</p>
        <p>TEL</p>
        <p>EMAIL</p>
      </div>
    </div>
    <div className="ai_footer-copyright">
      <p>@2022 A.i.Convergence(Thailand).Co.,LTD. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;