import React from "react";
import { Main } from "./style.js";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

function Hero() {
  return (
    <Main id="Home">
      <div className="text">
        <p className="name">Hi, i'm jemienachukw</p>
        <h1>
          Build Your Website <br />
          With us
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
        <a href="https://github.com/Jemienachukwu" style={{ color: "#000" }}>
          <GitHub />
        </a>
        <a href="https://github.com/Jemienachukwu" style={{ color: "#000" }}>
          <LinkedIn />
        </a>
        <a href="https://github.com/Jemienachukwu" style={{ color: "#000" }}>
          <Twitter />
        </a>
      </div>
    </Main>
  );
}

export default Hero;
