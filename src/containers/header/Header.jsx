import React, { useState, useEffect, useRef, useCallback } from 'react'
import emailjs from '@emailjs/browser';
import './header.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ai from '../../assests/AI-Convergence.bmp';
import ai2 from '../../assests/blog01.png';
import ai3 from '../../assests/blog02.png';
import ai4 from '../../assests/blog03.png';
const Header = ({}) => {
  const form = useRef();
  const images = [
    {url: ai},{url: ai2},{url: ai3},{url: ai4}
  ];
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
          {/* <p>Subscribe to get early access to our news and updates on products, the latest technology and events.</p> */}
        </div>
      </div>
    <div className="ai_header-image">
      <Carousel 
        autoPlay 
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        width="auto"
        height="auto">
        <div className='imgg'>
          <img src={images[0].url} alt="image_data" />
        </div>
        <div className='imgg'>
          <img src={images[1].url} alt="image_data" />
        </div>
        <div className='imgg'>
          <img src={images[2].url} alt="image_data" />
        </div>
        <div className='imgg'>
          <img src={images[3].url} alt="image_data" />
        </div>
      </Carousel >
    </div>
  </div>
  )
}

export default Header