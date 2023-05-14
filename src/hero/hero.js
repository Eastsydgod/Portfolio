import { Main } from "./style.js";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { motion } from "framer-motion";
import {
  riseWithFade,
  staggerChildren,
  wordAnimation,
} from "../components/utils/animations.js";
import gif from "../components/anim.json";
import Lottie from "lottie-react";

function Hero({ isDarkMode }) {
  return (
    <Main id="Home">
      <div className="cont">
        <motion.div className="text" initial="initial" animate="animate">
          <motion.p
            className="tag"
            variants={riseWithFade}
            style={{
              background: isDarkMode ? "#2a2b3880" : "#EEEEEE",
              color: isDarkMode ? "#fff" : "#000",
            }}
          >
            I am actively seeking a frontend Developer role.
          </motion.p>

          <motion.span
            variants={staggerChildren}
            className="header"
            style={{ color: isDarkMode ? "#fff" : "#000" }}
          >
            <div style={{ display: "inline-block" }}>
              <motion.span
                variants={wordAnimation}
                style={{ display: "inline-block" }}
              >
                turning
              </motion.span>{" "}
              <motion.span
                variants={wordAnimation}
                style={{ display: "inline-block" }}
              >
                your
              </motion.span>{" "}
              <motion.span
                variants={wordAnimation}
                style={{ display: "inline-block" }}
                className="animatedText"
              >
                ideas
              </motion.span>{" "}
              <motion.span
                variants={wordAnimation}
                style={{ display: "inline-block" }}
              >
                into
              </motion.span>{" "}
              <motion.span
                variants={wordAnimation}
                style={{ display: "inline-block" }}
              >
                real
              </motion.span>{" "}
              <motion.span
                variants={wordAnimation}
                style={{ display: "inline-block" }}
              >
                life
              </motion.span>{" "}
              <motion.span
                variants={wordAnimation}
                style={{ display: "inline-block" }}
              >
                products
              </motion.span>{" "}
            </div>
          </motion.span>

          <motion.p className="bottom-text" variants={riseWithFade}>
            I’m a Frontend <b>Software Developer</b>, specializing in building
            websites/webapps with exceptional digital experiences
          </motion.p>
        </motion.div>

        <div className="lottie">
          <Lottie animationData={gif} loop={true} />
        </div>
      </div>
      <div className="icons">
        <a
          href="https://github.com/Jemienachukwu"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub
            style={{ color: isDarkMode ? "#ccd6f6" : "#000", fontSize: "17px" }}
          />
        </a>
        <a
          href="https://linkedin.com/mwlite/in/jemienachukwu-ofoegbu-801703238"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn
            style={{ color: isDarkMode ? "#ccd6f6" : "#000", fontSize: "17px" }}
          />
        </a>
        <a href="mailto:jemieofoegbu@gmail.com">
          <Mail
            style={{ color: isDarkMode ? "#ccd6f6" : "#000", fontSize: "17px" }}
          />
        </a>
      </div>
    </Main>
  );
}
export default Hero;
