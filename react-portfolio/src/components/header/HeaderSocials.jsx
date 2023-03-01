import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {ImStackoverflow} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header___socials'>
        <a href="https://www.linkedin.com/in/martin-cespedes-3741b4265/" target ="_blank"><BsLinkedin/></a>
        <a href="https://github.com/MartinCespedes" target ="_blank"><FaGithub/></a>
        <a href="https://stackoverflow.com/users/21306277/martin-cespedes" target ="_blank"><ImStackoverflow/></a>

    </div>
  )
}

export default HeaderSocials