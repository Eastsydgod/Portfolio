import React from 'react'
import { Main } from './Herostyle.js'
import '../images/hero.jpg'
import NavBar from './Navbar/Nav.js'

function Hero() {
  return (
    <Main id="home">
      <NavBar />

      <div className="text">
        <h1>Web Developer</h1>
        <p>
          Lorem ipsum maiores totam accusantium laudantium, neque nihil corrupti
          nostrum? dolor sit amet, consectetur adipisicing elit. Voluptas fugiat
          itaque maiores totam accusantium laudantium, neque nihil corrupti
          nostrum? Harum, nihil eius! Iste, quam ipsa!
        </p>
      </div>
    </Main>
  )
}

export default Hero
