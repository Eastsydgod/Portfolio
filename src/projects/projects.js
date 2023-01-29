import React from "react";
import { Style } from "./style";
import img1 from "./images/65ed72deac647aa84f75c5af8f6284ab926931b0-1200x900.png";
import img2 from "./images/90d71de50f2c6659156500e7a4d76a618e1fcd63-1200x900.png";
import img4 from "./images/b62651ef34a9e54c354ee437545acc348fbf0505-1200x900.png";
import portfolio from "./images/portfolio.png";
import { GitHub } from "@mui/icons-material";

const card = [
  {
    img: img2,
    name: "online store",
    text: "An online shopping websit, a full mern stack project ",
    gitlink: "https://github.com/Jemienachukwu/e-commerce",
    tech: " React Redux React-Bootstrap Express API NodeJs mongodb",
    about:
      "Built a frontend for an e-commerce platform using React, Redux and integrated with an API for data fetching and management, using Mobgodb for the data base I created a list of products that can be updated through the website if user is an admin",
  },
  {
    img: img1,
    name: "MediCare",
    ongoing: true,
    text: "A functioning clinic website, where patients can book appointments with available doctore",
    gitlink: "https://github.com/Jemienachukwu/food-practice",
    tech: " React Styled-Components Express API Heroku",
    about:
      " A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detaile audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more",
  },
  {
    img: img4,
    name: "Robofriends",
    text: "generate cool robots using the robo friends api",
    gitlink: "https://github.com/Jemienachukwu/Robots",
    tech: " React tachyons-cssToolkit",
    about:
      " A website for generating random bots using robohash api, generate a unique bot by entering your name and browse through other bots",
  },
  {
    img: portfolio,
    name: "portfolio",
    text: "my personal portfolio",
    gitlink: "https://github.com/Jemienachukwu/portfolio",
    link: "https://portfolio-jemienachukwu.vercel.app",
    tech: " React Styled-Components material-ui ",
    about: " A personal website to showcase my projects and other achievements",
  },
];

const Projects = () => {
  return (
    <Style id="Projects">
      <h1>
        My Creative <span style={{ color: "dodgerblue" }}>Projects</span>
      </h1>
      <div className="cards">
        {card.map((item, i) => (
          <div className={i % 2 === 0 ? "card" : "cardInverse"} key={i}>
            <div className="firstContainer">
              <p>Project :</p>
              <h3>{item.name}</h3>
              <div className="content">
                <p>{item.about}</p>
              </div>
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
