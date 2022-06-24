import React, { useState, useEffect, useRef  } from 'react';
import emailjs from '@emailjs/browser';
import './header.css';
import ai from '../../assests/AI-Convergence.bmp';
import ai2 from '../../assests/blog01.png';
import SimpleImageSlider from "react-simple-image-slider";
const Header = () => {
  const ImageSliderStyle = { width: '100%', height: '100%'}
  const images = [
    {url: ai},{url: ai2}
  ];
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_b3k56mp', 'template_b9s5c0i', form.current, '28XfGGlh7fcpswBvp')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  };
  return (
    <div className="ai_header section__padding" id="home">
    <div className="ai_header-content">
    <h1 className="gradient__text">Welcome to A.i.Convergence Thailand</h1> {/* หาวิธีใส่วงเล็บ */}
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <form className="ai_header-content_input"ref={form} onSubmit={sendEmail}>
        <input type="email" placeholder="Your Email Address" name="user_email" onSubmit={sendEmail}/>
        <button type="button" value="send" onClick={sendEmail}>Get Started</button>
      </form>
      <div className="ai_header-content_people">
        <p>Subscribe to get early access to our news and updates on products, the latest technology and events.</p>
      </div>
    </div>
    <div className="ai_header-image">
        <SimpleImageSlider
          // style={{
          //   display: "block",
          //   width: '20%',
          //   height: '20%'
          // }}
          width={'43.229vw'}
          // width={"inherit"}
          // width={ImageSliderStyle.width}
          navStyle={2}
          height={'44.9vh'}
          // height={'inherit'}
          // height={ImageSliderStyle.height}
          images={images}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={2}
          useGPURender={true}
          showBullets={false}
        />
    </div>
  </div>
  )
}

export default Header