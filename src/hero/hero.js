import React from "react";
import { Main } from "./style.js";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";

function Hero() {
  return (
    <Main id="Home">
      <div className="text">
        <p className="name">Hi, my name is </p>
        <h1>
          jemienachukwu. <br />
          Build Your Website With me
        </h1>
        <p className="bottom-text">
          I’m a Frontend <b>Software Developer</b>, specializing in building
          websites/webapps with exceptional digital experiences
        </p>
      </div>
      <div className="icons">
        <a
          href="https://github.com/Jemienachukwu"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub className="icons" />
        </a>
        <a
          href="https://github.com/Jemienachukwu"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn className="icons" />
        </a>
        <a href="mailto:jemieofoegbu@gmail.com">
          <Mail className="icons" />
        </a>
      </div>
    </Main>
  );
}

export default Hero;
