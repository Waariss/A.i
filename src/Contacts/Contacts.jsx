import React, { useRef ,useMemo} from 'react';
import emailjs from '@emailjs/browser';
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import './contacts.css'
export default function Homes(){
  const { isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyCodgEvlSjovONeG5XJFXZ5dgFhgfh2pVg"});
  if (isLoaded) return <Contact />;
};
function Contact(){
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_fk23tma', 'template_fp4ozr7', form.current, '28XfGGlh7fcpswBvp')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  };
  const center = useMemo(() => ({ lat: 13.813867454539539,lng: 100.65877457675955}), []);
  return (
    <div className='titlee section__padding' id="contact">
      <h1 className="gradient__text">How Can We Help You?</h1>
      <div className='contact_container section__padding'>
        <div className='des_container'>
          <GoogleMap zoom={17} center={center} mapContainerClassName = "map2-container" >
                <Marker position={center} name={'Kenyatta International Convention Centre'}/>
          </GoogleMap>
          <h2>A.i.Convergence(Thailand).Co.,LTD.</h2>
          <p><a href='https://goo.gl/maps/TuY24y8x8ZtmiSsE6'target="_blank">Address: 132 Nawamin 74 Alley, Lane 3-8-13, Ram Inthra, Khan Na Yao, Bangkok 10230</a></p>
          <p><a href="mailto:aiconvergence@live.com">Email: aiconvergence@live.com</a></p>
          <p><a href="tel:+66950507676">Phone: 0950507676</a></p>
        </div>
      <div className="contact_content">
        <form classname="contact_from" ref={form} onSubmit={sendEmail}>
          <label>First Name</label>
          <input type="text" placeholder="Your first Name*" name="fname" required/>
          <label>Last Name</label>
          <input type="text" placeholder="Your last Name*" name="lname" required/>
          <label>Email</label>
          <input type="email" placeholder="Your Email*" name="user_email" required/>
          <label>Phone Number</label>
          <input type="Phone" placeholder="Your phone number*" name="phone" required/>
          <label>Comments</label>
          <textarea name="message" placeholder="Comments"/>
          <a>We respect your privacy and will never send you unwanted spam.</a>
          <input type="submit" value="Send" />
        </form>
      </div>
      </div>
    </div>
    );
}
