import React from 'react';
import './ct.css';
import { useNavigate } from "react-router-dom";
const CT = () =>  {
  const navigate = useNavigate();
  return(
  <div className="ai_ct">
    <div className="ai_ct-content">
      <h3>Questions,bug reports,feedback,feature requests-we're here for it all.</h3>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="ai_ct-btn">
      <button onClick={() => navigate("/A.i/Contact")} type="button">Contact us</button>
    </div>
  </div>
  )
};
export default CT;