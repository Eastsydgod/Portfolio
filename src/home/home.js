import About from '../About/about'
import Hero from '../hero/hero'
import Skills from '../skills/skills'
import Card from '../reviews/card'
// import Services from '../Services/services'
import Contact from '../contact/contact'
import { Main } from './style.js'
import NavBar from '../hero/Navbar/Nav'
import Projects from '../projects/projects'



function Home() {
  return (
    <Main>
      <span  className='nav'>
      <NavBar/>
      </span>
     
      <Hero />
      <About />
      <Skills />
      <Projects/>
      {/* <Services /> */}
      <Card />
      <Contact />
    </Main>
  )
}

export default Home
