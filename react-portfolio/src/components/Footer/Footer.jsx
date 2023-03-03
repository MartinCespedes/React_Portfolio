import React from 'react'
import "./footer.css"
import {BsGithub} from 'react-icons/bs' 
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MEC</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://github.com/MartinCespedes"><BsGithub/></a>
        <a href="http://instagram.com"><FiInstagram/></a>
        <a href="http://twitter.com"><IoLogoTwitter/></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; Martin Cespedes. All rights reserved.</small>
      </div>




    </footer>
  )
}

export default Footer