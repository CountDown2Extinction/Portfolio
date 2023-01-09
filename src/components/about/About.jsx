import React from 'react';
import './about.css';
import {TbHelicopter} from 'react-icons/tb'
import{GiBoatFishing} from 'react-icons/gi'
import{GiMagicLamp} from 'react-icons/gi'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me_visualizer"></div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
            <TbHelicopter className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className="about_card">
            <GiBoatFishing className='about_icon'/>
              <h5>Skills</h5>
              <small>Full Stack</small>
            </article>

            <article className="about_card">
            <GiMagicLamp className='about_icon'/>
              <h5>Projects</h5>
              <small>2+ Completed</small>
            </article>
          </div>

          <p>
          Software Engineer and Military Veteran leveraging 6 years of proven experience in project management, software and systems
design, Agile workflow, scrum environments, systems testing, and troubleshooting. Adept at leading small teams in a dynamic,
fast-paced environment. Possess a comprehensive background in overseeing projects and equipment while ensuring effective
time management and interpersonal communication. Demonstrates the unique ability to conceptualize innovative solutions,
designs, and scaling. Career supported by the comprehensive knowledge of the current industry and technological trends.
          </p>

          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About