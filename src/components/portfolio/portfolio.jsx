import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio-img-amazon-clone1.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recenent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio_item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Front End Amazon Clone</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/fec-galvanize/Amazon-Clone/tree/main" className='btn'>Github</a>
            <a href="https://webheads-primo-w6n8.onrender.com/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
};

export default Portfolio