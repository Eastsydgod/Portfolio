import React from "react";
import { Style } from "./style";
import img1 from "./images/65ed72deac647aa84f75c5af8f6284ab926931b0-1200x900.png";
import img2 from "./images/90d71de50f2c6659156500e7a4d76a618e1fcd63-1200x900.png";
import omazpro from "./images/omazpro.png";
import portfolio from "./images/portfolio.png";
import { GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";

const card = [
  {
    img: img2,
    name: "online store",
    gitlink: "https://github.com/Jemienachukwu/e-commerce",
    tech: " React Redux React-Bootstrap Express API NodeJs mongodb",
    about:
      "Built a MERN stack e-commerce platform, for buying products. it fearures admin functionalities and a whole lot more ",
  },
  {
    img: img1,
    name: "MediCare",
    gitlink: "https://github.com/Jemienachukwu/food-practice",
    tech: " React Styled-Components Express API Heroku",
    about:
      " A web app for visualizing personalized Spotify data. View your top artists, top tracks, and detaile audio information about each track. on your existing playlists and more",
  },
  {
    img: omazpro,
    name: "omazpro",
    gitlink: "https://github.com/Jemienachukwu/Robots",
    tech: " Express React styledComponents  ",
    about:
      " Built a website for a local cosmetic store, for buying and selling of cosmetic products and also booking appointments",
  },
  {
    img: portfolio,
    name: "portfolio",
    gitlink: "https://github.com/Jemienachukwu/portfolio",
    link: "https://portfolio-jemienachukwu.vercel.app",
    tech: " React Styled-Components material-ui ",
    about: " A personal website to showcase my projects and other achievements",
  },
];

const Projects = () => {
  return (
    <Style id="Projects">
      <div className="header">
        My <span className="animateText">creative</span> projects
      </div>
      <div className="cards">
        {card.map((item, i) => (
          <div className={i % 2 === 0 ? "card" : "cardInverse"} key={i}>
            <div className="firstContainer">
              <p>Project : {item.name}</p>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <div className="content">
                  <p>{item.about}</p>
                </div>
              </motion.div>
              <div className="tech">{item.tech}</div>

              <a
                href={item.gitlink}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#8892b0" }}
              >
                <GitHub className="icon" />
              </a>
            </div>
            <div className="secondContainer">
              {item.ongoing && <div className="onGoing"> onGoing</div>}
              <a href={item.link} target="_blank" rel="noreferrer">
                <img
                  src={item.img}
                  alt="img"
                  className={item.ongoing ? "disabled" : "enabled"}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Style>
  );
};

export default Projects;
