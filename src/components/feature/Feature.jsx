import React from 'react';
import './feature.css';
const Feature = ({ title, text, url, className }) => (
  <div className="ai_features-container_feature">
    <div className="ai_features-container_feature-title">
      <div />
      <a href={url} className={className}><h1>{title}</h1></a>
    </div>
    <div className="ai_features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;