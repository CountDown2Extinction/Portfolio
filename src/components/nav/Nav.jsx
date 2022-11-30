import React from 'react'
import './nav.css';
import { AiTwotoneHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { AiOutlineMail } from 'react-icons/ai';



const Nav = () => {
  return (
    <nav>
      <a href='#'><AiTwotoneHome/></a>
      <a href='#about'><AiOutlineUser/></a>
      <a href='#experience'><BsBook/></a>
      <a href='#services'><HiOutlineDesktopComputer/></a>
      <a href='#contact'><AiOutlineMail/></a>

    </nav>
  )
}

export default Nav