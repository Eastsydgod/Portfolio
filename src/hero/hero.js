import { Main } from "./style.js";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { motion } from "framer-motion";
import {
  riseWithFade,
  staggerChildren,
  wordAnimation,
} from "../components/utils/animations.js";

function Hero() {
  // const colorText = ;
  // const title =;

  return (
    <Main id="Home">
      <motion.div className="text" initial="initial" animate="animate">
        <motion.p className="name" variants={riseWithFade}>
          Hi, my name is, <b> jemienachukwu</b>
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
      <div className="icons">
        <a
          href="https://github.com/Jemienachukwu"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub className="icon" />
        </a>
        <a
          href="https://github.com/Jemienachukwu"
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
// const AnimateWords = ({ title }) => {
//   console.log(title.split(" ")[1]);
//   return (
//     <motion.span variants={staggerChildren} initial="initial" animate="animate">
//       {title.split(" ").map((word, i) => (
//         <div key={i} style={{ display: "inline-block" }}>
//           <motion.span
//             variants={wordAnimation}
//             style={{ display: "inline-block" }}
//           >
//             {word + "\u00A0"}
//           </motion.span>
//         </div>
//       ))}
//     </motion.span>
//   );
// };
