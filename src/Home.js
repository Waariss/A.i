import React from 'react';
import {About,Blog,Features,Footer,Header,Contact,Stroy,Reference} from './containers';
import {CTA , Brand, Navbar} from './components';
import Sop from './Top/Scrolltotop'
import './App.css'
const Home = () => {
  return (
    <div className='App'>
        <div className='bg'>
          <Sop/>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <About />
        <Features />
        <Reference/>
        {/* <Stroy />  */}
        <Blog />    
        {/* <Contact /> */}
        <CTA />
        <Footer/>
    </div>
  )
}
export default Home
