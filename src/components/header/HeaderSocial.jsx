import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/justin-melendez-73683423a/' target="blank"><BsLinkedin/></a>
        <a href='https://github.com/CountDown2Extinction' target="blank"><BsGithub/></a>
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="blank"><BsYoutube/></a>
    </div>
  )
}

export default HeaderSocial