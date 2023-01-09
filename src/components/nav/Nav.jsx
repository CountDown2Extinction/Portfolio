import React from 'react'
import './nav.css';
import { AiTwotoneHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { AiOutlineMail } from 'react-icons/ai';
import { useState } from 'react';



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <nav onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome/>
      {isHovering && <h2>Home</h2>}
      </a> 

      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/>
      {isHovering && <h2>About</h2>}
      </a>

      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBook/>
      {isHovering && <h2>Skills</h2>}
      </a>

      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><HiOutlineDesktopComputer/>
      {isHovering && <h2>Apps</h2>}
      </a>

      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMail/>
      {isHovering && <h2>Email</h2>}
      </a>

    </nav>
  )
}

export default Nav