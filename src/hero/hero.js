import React from "react";
import { Main } from "./style.js";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";

function Hero() {
  return (
    <Main id="Home">
      <div className="text">
        <p className="name">Hi, i'm jemienachukwu</p>
        <h1>
          Build Your Website <br />
          With me
        </h1>
        <div className="bottom-text">
          <p>
            Lorem ipsum maiores totam accusantium laudantium, neque nihil
            corrupti nostrum? dolor sit amet, consectetur adipisicing elit.
            Voluptas fugiat itaque maiores totam accusantium laudantium, neque
            nihil corrupti nostrum? Harum, nihil eius! Iste, quam ipsa!
          </p>
        </div>
      </div>
      <div className="icons">
        <a
          href="https://github.com/Jemienachukwu"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#000" }}
        >
          <GitHub />
        </a>
        <a
          href="https://github.com/Jemienachukwu"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#000" }}
        >
          <LinkedIn />
        </a>
        <a href="mailto:jemieofoegbu@gmail.com" style={{ color: "#000" }}>
          <Mail />
        </a>
      </div>
    </Main>
  );
}

export default Hero;
