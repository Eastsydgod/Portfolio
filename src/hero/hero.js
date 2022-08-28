import React from 'react'
import { Main } from './style.js'
import '../images/hero.jpg'
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material'

function Hero() {
  return (
    <Main id="Home">
      <div className="text">
        <h1>Web Developer</h1>
        <p>
          Lorem ipsum maiores totam accusantium laudantium, neque nihil corrupti
          nostrum? dolor sit amet, consectetur adipisicing elit. Voluptas fugiat
          itaque maiores totam accusantium laudantium, neque nihil corrupti
          nostrum? Harum, nihil eius! Iste, quam ipsa!
        </p>
      </div>
      <div className='icons'>
        <GitHub/>
        <LinkedIn/>
        <Twitter/>
      </div>
    </Main>
  )
}

export default Hero
