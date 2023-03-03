import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {ImStackoverflow} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/martin-cespedes-3741b4265/" target =""><BsLinkedin/></a>
        <a href="https://github.com/MartinCespedes" target =""><FaGithub/></a>
        <a href="https://stackoverflow.com/users/21306277/martin-cespedes" target =""><ImStackoverflow/></a>

    </div>
  )
}

export default HeaderSocials