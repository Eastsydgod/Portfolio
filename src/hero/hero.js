import { Main } from "./style.js";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { motion } from "framer-motion";
import {
  riseWithFade,
  staggerChildren,
  wordAnimation,
} from "../components/utils/animations.js";
import gif from "../anim.json";
import Lottie from "lottie-react";

function Hero() {
  return (
    <Main id="Home">
      <div className="cont">
        <motion.div className="text" initial="initial" animate="animate">
          <motion.p className="tag" variants={riseWithFade}>
            I am actively seeking a frontend Developer role.
          </motion.p>

          <motion.span variants={staggerChildren} className="header">
            <div style={{ display: "inline-block" }}>
              <motion.span
                variants={wordAnimation}
                style={{ display: "inline-block" }}
              >
                turn
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
          <GitHub className="icon" />
        </a>
        <a
          href="https://linkedin.com/mwlite/in/jemienachukwu-ofoegbu-801703238"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn className="icon" />
        </a>
        <a href="mailto:jemieofoegbu@gmail.com">
          <Mail className="icon" />
        </a>
      </div>
    </Main>
  );
}
export default Hero;
