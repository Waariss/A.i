import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
const featuresData = [
  {
    title: 'Application(on Client)',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    url:"/A.i/Stroy",
  },
  {
    title: 'Application(Mobile)',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    url:"/A.i/Stroy",
  },
  {
    title: 'Web application',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    url:"/A.i/Stroy",
  },
];
const Features = () => (
  <div className="ai_features section__padding" id="features">
    <div className="ai_features-heading">
      <h1 className="gradient__text">A.i.Technology</h1>
      <h2>The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h2>
    </div>
    <div className="ai_features-container">
      {featuresData.map((item, index) => (
        <Feature url={item.url} title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;