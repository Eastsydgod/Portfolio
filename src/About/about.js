import { Main } from "./aboutstyle";
import { motion } from "framer-motion";

function About() {
  return (
    <Main id="About">
      <div className="container">
        <motion.div animate={{ x: 100 }}>
          <p>
            👋Hi, I am Ofoegbu Jemienachukwu Jeffery, a self taught frontend
            Software Engineer with 2+ years experience working on web
            applications using Javascript and react. I build user friendly
            applications and observe clean code practices while building them
          </p>
        </motion.div>
        <a href="https://docs.google.com/document/d/1mtHza1j34uL7jsPPLae6cK0kcG_M4AOBflXvnIoykwY/edit?usp=sharing">
          <button>View My Resume</button>
        </a>
      </div>
    </Main>
  );
}

export default About;
