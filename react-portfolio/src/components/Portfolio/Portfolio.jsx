import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/beer_buddy.png'
import IMG2 from '../../assets/project_gamelist.png'
import IMG3 from '../../assets/Guess_My_Number_1.png'
import IMG4 from '../../assets/E-Commerce_IMG1.png'
import IMG5 from '../../assets/Web_Quiz_1.png'
import IMG6 from '../../assets/project_development.png'


const data = [
  {
    id:1,
    image: IMG1,
    title: 'Beer Buddy',
    github:'https://github.com/Daphnetatertot/Project_DAAM',
    demo: 'https://daphnetatertot.github.io/Project_DAAM/'
  },
  {
    id:2,
    image: IMG2,
    title: 'Project GameList',
    github:'https://github.com/MartinCespedes/project-gamelist',
    demo: 'https://project-gamelist.herokuapp.com/'
  },
  {
    id:3,
    image: IMG3,
    title: 'Guess My Number',
    github:'https://github.com/MartinCespedes/Guess_My_Number',
    demo: 'https://martincespedes.github.io/Guess_My_Number/'
  },
  {
    id:4,
    image: IMG4,
    title: 'E-Commerce Backend',
    github:'https://github.com/MartinCespedes/E-Commerce_Back_End',
    demo: 'https://project-gamelist.herokuapp.com/'
  },
  {
    id:5,
    image: IMG5,
    title: 'Web API Quiz',
    github:'https://github.com/MartinCespedes/Web_API_Quiz',
    demo: 'https://martincespedes.github.io/Web_API_Quiz/'
  },
  {
    id:6,
    image: IMG6,
    title: 'Project in Development',
    github:'https://github.com/MartinCespedes/Project_3',
    demo: 'https://github.com/MartinCespedes/Project_3'
  },
]

const Portfolio = () => {
  return (
<section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    
    <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
          return (  
          <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Application</a>
           </div>
          </article>

          )
        })
      }
     
       
    </div>
  </section>
  )
}

export default Portfolio