import { Main } from "./aboutstyle";
import userAnim from "../components/userAnim.json";

import Lottie from "lottie-react";
function About() {
  return (
    <Main id="About">
      <div className="lottie">
        <Lottie animationData={userAnim} loop={true} />
      </div>
      <div className="container">
        <p>
          👋Hi, I am Ofoegbu Jemienachukwu Jeffery, a self taught frontend
          Software Engineer with 2+ years experience working on web applications
          using Javascript and react. I build user friendly applications and
          observe clean code practices while building them
        </p>
        <a href="https://docs.google.com/document/d/1mtHza1j34uL7jsPPLae6cK0kcG_M4AOBflXvnIoykwY/edit?usp=sharing">
          <button>View My Resume</button>
        </a>
      </div>
    </Main>
  );
}

export default About;
