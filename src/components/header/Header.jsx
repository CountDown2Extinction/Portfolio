import React from 'react';
import './header.css';
import CTA from './CTA';
// import Diamond from './diamond/Diamond.jsx';
// import Visualizer from './visualizer/Visualizer';

const Header = () => {
  return (
    <header>
      <div className="conatiner header__container">
        <h5>Hello I'm</h5>
        <h1>Justin Melendez</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        {/* <Diamond className="Diamond"></Diamond> */}
        {/* <Visualizer /> */}


      </div>
    </header>
  )
}

export default Header