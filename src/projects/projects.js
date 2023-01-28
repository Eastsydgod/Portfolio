import React from "react";
import { Style } from "./style";
import img1 from "./images/65ed72deac647aa84f75c5af8f6284ab926931b0-1200x900.png";
import img2 from "./images/90d71de50f2c6659156500e7a4d76a618e1fcd63-1200x900.png";
import img4 from "./images/b62651ef34a9e54c354ee437545acc348fbf0505-1200x900.png";
import { GitHub } from "@mui/icons-material";

const card = [
  {
    img: img2,
    name: "online store",
    text: "An online shopping websit, a full mern stack project ",
    link: "https://github.com/Jemienachukwu/e-commerce",
    tech: " React Styled Components Express API NodeJs",
    about:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save newplaylists of recommended tracks based on your existingplaylists and more",
  },
  {
    img: img1,
    name: "MediCare",
    text: "A functioning clinic website, where patients can book appointments with available doctore",
    link: "https://github.com/Jemienachukwu/food-practice",
    tech: " React Styled Components Express API Heroku",
    about:
      " A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detaile audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more",
  },
  {
    img: img4,
    name: "Robofriends",
    text: "generate cool robots using the robo friends api",
    link: "https://github.com/Jemienachukwu/Robots",
    tech: " React StyledComponents Redox",
    about:
      " A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more",
  },
  {
    img: img4,
    name: "Robofriends",
    text: "generate cool robots using the robo friends api",
    link: "https://github.com/Jemienachukwu/Robots",
    tech: " React Styled Components Express API Heroku",
    about:
      " A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more",
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
          <div className={i % 2 === 0 ? "card" : "cardInverse"}>
            <div className="firstContainer">
              <p>Projects</p>
              <h3>{item.name}</h3>
              <div className="content">
                <p>{item.about}</p>
              </div>
              <div className="tech">{item.tech}</div>
              <GitHub className="icon" />
            </div>
            <div className="secondContainer">
              <a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.img} alt="img" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Style>
  );
};

export default Projects;
