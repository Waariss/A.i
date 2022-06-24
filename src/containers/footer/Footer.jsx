import React from 'react';
import ai from '../../assests/AI-Convergence.bmp';
import './footer.css';
const Footer = () => (
  <div className="ai_footer section__padding">
    <div className="ai_footer-links">
      <div className="ai_footer-links_logo">
        <img src={ai} alt="gpt3_logo" />
        <p>Copyright (C) A.i.Convergence(Thailand).Co.,LTD, <br /> All Rights Reserved</p>
      </div>
      <div className="ai_footer-links_div">
        <h4>Links</h4>
        <a>Overons</a>
        <a>Social Media</a>
        <a>Counters</a>
        <a>Contact</a>
      </div>
      <div className="ai_footer-links_div">
        <h4>Company</h4>
        <a>Terms & Conditions </a>
        <a>Privacy Policy</a>
        <a href="/A.i/Contact">Contact us</a>
      </div>
      <div className="ai_footer-links_div">
        <h4>Contact us</h4>
        <a href='https://goo.gl/maps/TuY24y8x8ZtmiSsE6' target="_blank">Address: 132 Nawamin 74 Alley, Lane 3-8-13, Ram Inthra, Khan Na Yao, Bangkok 10230</a>
        <a href="tel:+66950507676">Phone: 0950507676</a>
        <a href="mailto:aiconvergence@live.com">Email: aiconvergence@live.com</a>
      </div>
    </div>
    <div className="ai_footer-copyright">
      <p>@2022 A.i.Convergence(Thailand).Co.,LTD. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;