import React from "react";
import { Style } from "./style";
import img1 from "./images/65ed72deac647aa84f75c5af8f6284ab926931b0-1200x900.png";
import img2 from "./images/90d71de50f2c6659156500e7a4d76a618e1fcd63-1200x900.png";
import img3 from "./images/81453f8627bdfeba1c18751bcf1238f202db97f0-300x168.jpg";
import img4 from "./images/b62651ef34a9e54c354ee437545acc348fbf0505-1200x900.png";
import { GitHub, Visibility } from "@mui/icons-material";

const card = [
  {
    img: img3,
    name: "filmss",
    text: "An AI powered movie app bringing promising entertainment to you anywhere",
    link: "https://github.com/Jemienachukwu/e-commerce",
  },
  {
    img: img2,
    name: "online store",
    text: "An online shopping websit, a full mern stack project ",
    link: "https://github.com/Jemienachukwu/e-commerce",
  },
  {
    img: img1,
    name: "MediCare",
    text: "A functioning clinic website, where patients can book appointments with available doctore",
    link: "https://github.com/Jemienachukwu/food-practice",
  },
  {
    img: img4,
    name: "Robofriends",
    text: "generate cool robots using the robo friends api",
    link: "https://github.com/Jemienachukwu/Robots",
  },
];
const Projects = () => {
  return (
    <Style id="Projects">
      <h1>
        My Creative <span style={{ color: "dodgerblue" }}>Projects</span>
      </h1>
      <div className="cards">
        {card.map((item) => (
          <div className="card" key={item.name}>
            <div className="img-Container">
              <img src={item.img} alt="img" />
              <div>{item.name}</div>
            </div>
            <p>{item.text}</p>
            <Visibility className="icon" />
            <a href={item.link}>
              <GitHub className="icon" />
            </a>
          </div>
        ))}
      </div>
    </Style>
  );
};

export default Projects;
