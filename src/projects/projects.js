import React from "react";
import { Style } from "./style";
import ecommerce from "./images/ecommerce.png";
import omazpro from "./images/omazpro.png";
import game from "./images/game.png";
import { GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";

const card = [
  {
    img: ecommerce,
    name: "online store",
    gitlink: "https://github.com/Jemienachukwu/e-commerce",
    link: "https://techshop-fiqo.onrender.com/",
    tech: " React Redux React-Bootstrap Express API NodeJs mongodb",
    about:
      "Built a MERN stack e-commerce platform, for buying products. it fearures admin functionalities and a whole lot more ",
  },
  {
    img: omazpro,
    name: "omazpro",
    gitlink: "https://github.com/Jemienachukwu",
    link: "https://frontend-omazpro.vercel.app",
    tech: " Express React styledComponents  ",
    about:
      " Built a website for a local cosmetic store, for buying and selling of cosmetic products and also booking appointments",
  },
  {
    img: game,
    name: "Gamelyd",
    gitlink: "#",
    link: "https://gamelyd.co",
    tech: " Express React  ",
    about:
      "Gamelyd is an online plartform that helps in organizing game tournaments in diffrent modes.",
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
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
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
