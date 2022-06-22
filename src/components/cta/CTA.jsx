import React from 'react';
import './cta.css';
import { useNavigate } from "react-router-dom";
const CTA = () =>  {
  const navigate = useNavigate();
  return(
  <div className="ai_cta">
    <div className="ai_cta-content">
      <h3>Questions,bug reports,feedback,feature requests-we're here for it all.</h3>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="ai_cta-btn">
      <button onClick={() => navigate("/A.i/History")} type="button">Contact us</button>
    </div>
  </div>
  )
};
export default CTA;