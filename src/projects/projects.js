import React from "react";
import { Style } from "./style";
// import img1 from "./images/65ed72deac647aa84f75c5af8f6284ab926931b0-1200x900.png";
// import img2 from "./images/90d71de50f2c6659156500e7a4d76a618e1fcd63-1200x900.png";
import ecommerce from "./images/ecommerce.png";
import omazpro from "./images/omazpro.png";
import portfolio from "./images/portfolio.png";
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
    gitlink: "https://github.com/Jemienachukwu/Robots",
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
      "Gamelyd is an online plartform that helps in organizing game tournaments in diffrent modes, Gamelyd simplifies and makes it easy for people in diffrent locations to meet and play tournaments together.",
  },
  // {
  //   img: img1,
  //   name: "MediCare",
  //   gitlink: "https://github.com/Jemienachukwu/food-practice",
  //   tech: " React Styled-Components Express API Heroku",
  //   about:
  //     " A web app for visualizing personalized Spotify data. View your top artists, top tracks, and detaile audio information about each track. on your existing playlists and more",
  // },

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

// import { useState, useEffect } from "react";
// import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
// import { wrap } from "@motionone/utils";

// function ParallaxText(props) {
//   const { children, baseVelocity = 100 } = props;
//   const [scrollY, setScrollY] = useState(0);
//   const [scrollVelocity, setScrollVelocity] = useState(0);
//   const [directionFactor, setDirectionFactor] = useState(1);
//   const baseX = useMotionValue(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleVelocity = () => setScrollVelocity((prev) => scrollY - prev);
//     const interval = setInterval(handleVelocity, 100);

//     return () => clearInterval(interval);
//   }, [scrollY]);

//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400,
//   });

//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//     clamp: false,
//   });

//   const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

//   useEffect(() => {
//     const handleAnimationFrame = (t, delta) => {
//       let moveBy = directionFactor * baseVelocity * (delta / 1000);

//       if (velocityFactor.get() < 0) {
//         setDirectionFactor(-1);
//       } else if (velocityFactor.get() > 0) {
//         setDirectionFactor(1);
//       }

//       moveBy += directionFactor * moveBy * velocityFactor.get();

//       baseX.set(baseX.get() + moveBy);
//     };

//     const animationFrameId = requestAnimationFrame(handleAnimationFrame);

//     return () => cancelAnimationFrame(animationFrameId);
//   }, [directionFactor, baseVelocity, velocityFactor, baseX]);

//   return (
//     <div className="parallax">
//       <motion.div className="scroller" style={{ x }}>
//         <span>{children} </span>
//         <span>{children} </span>
//         <span>{children} </span>
//         <span>{children} </span>
//       </motion.div>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <section>
//       <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
//       <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
//     </section>
//   );
// }
