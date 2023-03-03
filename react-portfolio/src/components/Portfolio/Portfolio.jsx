import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/beer_buddy.png'
import IMG2 from '../../assets/project_gamelist.png'
import IMG3 from '../../assets/Guess_My_Number_1.png'
import IMG4 from '../../assets/E-Commerce_IMG1.png'
import IMG5 from '../../assets/Web_Quiz_1.png'
import IMG6 from '../../assets/project_development.png'

const Portfolio = () => {
  return (
<section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    
    <div className="container portfolio__container">
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG1} alt="" />
          </div>
          <h3>Beer Buddy</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/Daphnetatertot/Project_DAAM" className='btn' target='_blank'>Github</a>
          <a href="https://daphnetatertot.github.io/Project_DAAM/" className='btn btn-primary' target='_blank'>Live Application</a>
         </div>
        </article>
        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG2} alt="" />
          </div>
          <h3>Project GameList</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/MartinCespedes/project-gamelist" className='btn' target='_blank'>Github</a>
          <a href="https://project-gamelist.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Application</a>
         </div>
        </article>
        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG3} alt="" />
          </div>
          <h3>Guess My Number</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/MartinCespedes/Guess_My_Number" className='btn' target='_blank'>Github</a>
          <a href="https://martincespedes.github.io/Guess_My_Number/" className='btn btn-primary' target='_blank'>Live Application</a>
         </div>
        </article>
        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG4} alt="" />
          </div>
          <h3>E-Commerce Back End</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/MartinCespedes/E-Commerce_Back_End" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/MartinCespedes/E-Commerce_Back_End" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG5} alt="" />
          </div>
          <h3>JavaScript API Quiz</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/MartinCespedes/Web_API_Quiz" className='btn' target='_blank'>Github</a>
          <a href="https://martincespedes.github.io/Web_API_Quiz/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG6} alt="" />
          </div>
          <h3>Project In Development</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/MartinCespedes/Project_3" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/MartinCespedes/Project_3" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
    </div>
  </section>
  )
}

export default Portfolio