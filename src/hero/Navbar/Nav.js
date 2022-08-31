import React, { useState } from "react";
import { Style } from "./NavStyle.js";
import { Cancel, Menu } from "@mui/icons-material";

export default function NavBar() {
  const [Toggle, setToggle] = useState(false);
  function HandelClick() {
    setToggle((prevset) => !prevset);
  }

  return (
    <Style>
      <nav>
        <div>
          <h3>Jemienachukwu</h3>
        </div>

        <div className="navItem">
          <a href="#Home">
            <div>Home</div>
          </a>
          <a href="#About">
            <div>About</div>
          </a>

          <a href="#Skill">
            <div>Skill</div>
          </a>

          <a href="#Projects">
            <div>Projects </div>
          </a>

          <a href="#Contact">
            <div>Contact me</div>
          </a>
        </div>
        <div className="Ham">
          {Toggle ? (
            <Cancel onClick={HandelClick} />
          ) : (
            <Menu onClick={HandelClick} />
          )}
        </div>
      </nav>
      {Toggle && (
        <div className="TemporaryDrawer">
          <a href="#Contact">
            <div className="contact">Contact Me</div>
          </a>
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Skill">Skill</a>
          <a href="#Projects">Projects</a>
        </div>
      )}
    </Style>
  );
}
