import React from 'react';
import './header.css';
import ai from '../../assests/AI-Convergence.bmp';
const Header = () => {
  return (
    <div className="ai_header section__padding" id="home">
    <div className="ai_header-content">
    <h1 className="gradient__text">Welcome to A.i.Convergence Thailand</h1> {/* หาวิธีใส่วงเล็บ */}
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <div className="ai_header-content_input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
      <div className="ai_header-content_people">
        <p>Subscribe to get early access to our news and updates on products, the latest technology and events.</p>
      </div>
    </div>
    <div className="ai_header-image">
      <img src={ai} />
    </div>
  </div>
  )
}

export default Header
