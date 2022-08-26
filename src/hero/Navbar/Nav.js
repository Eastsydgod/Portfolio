import React, { useState } from 'react'
import AnchorIcon from '@mui/icons-material/Anchor'
import { Style } from './NavStyle.js'
import { Menu } from '@mui/icons-material'
// import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const [Toggle, setToggle] = useState(false)
  function HandelClick() {
    setToggle((prevset) => !prevset)
  }

  return (
    <Style>
      <nav>
        <div>
          <h2>JEMIENACHUKWU</h2> <AnchorIcon />
        </div>
        <div className="navItem">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Services">Services</a>
          <a href="#">Projects</a>
        </div>
        <div className="Ham">
          <Menu onClick={HandelClick} />
        </div>
      </nav>
      {Toggle && (
        <div className="TemporaryDrawer">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Services">Services</a>
          <a href="#">Projects</a>
          {/* <p>Home</p>
          <p>Home</p> */}
        </div>
      )}
    </Style>
  )
}
