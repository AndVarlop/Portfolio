import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Fondo1.jpg'
import IMG2 from '../../assets/Fondo2.jpg'
import IMG3 from '../../assets/Fondo3.jpg'
import IMG4 from '../../assets/Fondo4.jpg'
import Auditapp from '../../assets/Auditapp.png'
import Reposteria from '../../assets/Reposteria.png'
import ZonaABC from '../../assets/ZonaABC.png'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h3 className='text-light'>My Recent Work</h3>
      <h1>Portafolio</h1>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Auditapp} alt="" />
          </div>
          <h3>AuditApp</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" id='btn1' className='btn' target='_blank'>Github</a>
          <a href="https://andvarlop.github.io/AUDITAPP/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Reposteria} alt="" />
          </div>
          <h3>Alexandra Reposteria</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" id='btn1' className='btn' target='_blank'>Github</a>
          <a href="https://andvarlop.github.io/AlexandraReposteria1/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ZonaABC} alt="" />
          </div>
          <h3>ZonaABC</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" id='btn1' className='btn' target='_blank'>Github</a>
          <a href="https://andvarlop.github.io/ZonaABC/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" id='btn1' className='btn' target='_blank'>Github</a>
          <a href="http://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" id='btn1' className='btn' target='_blank'>Github</a>
          <a href="http://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" id='btn1' className='btn' target='_blank'>Github</a>
          <a href="http://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio