import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assests/AI-Convergence.bmp';
import { menuItems } from './menuItem';
import MenuItems from "./MenuItems.js";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='ai_navbar'>
      <div className='ai_navbar-links'>
        <div className='ai_navbar-links_logo'>
          <img src={logo} alt="logo" href='#home'/>
        </div>
        <div className='ai_navbar-links_container'>
        {/* <span className='Ai'>A.i.Convergence(Thailand)</span> */}
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;
          })}
        </div>
      </div>
      <div className='ai_navbar-sign'>
        <a>Sign in</a>
        <button type='button'>Sign up</button>
      </div>
      <div className='ai_navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#F96D00" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#F96D00" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu &&(
          <div className='ai_navbar-menu_container scale-up-center'>
            <div className='ai_navbar-menu_container-links'>
              {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;
              })}
            </div>
            <div className='ai_navbar-menu_container-link-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Navbar
