import React from 'react'
import './about.css'
import ME from '../../assets/Martin_1.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
   <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>


    <div className='.container about__container'>
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>10+ Years Working</small>

          </article>
          <article className="about__card">
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>100+ Worldwide</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>25+ Completed</small>
            </article>
          </div>
          <p>
          Hello, I'm Martin Cespedes, a driven full-stack developer with a passion for creating impactful projects that solve real-world problems. With a commitment to lifelong learning and a track record of delivering high-quality software solutions, I am eager to bring my skills and expertise to a dynamic and fast-paced software development environment.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
  </section>
  )
}

export default About