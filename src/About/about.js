import { Main } from "./aboutstyle";
import image from "./IMG-20220502-WA0038.jpg";

function About() {
  return (
    <Main id="About">
      <div className="Texts">
        <div className="texts">
          <h1>
            <span style={{ color: "coral" }}>About</span> Me{" "}
          </h1>
          <p>
            I am Ofoegbu Jemienachukwu Jeffery, A software developer from
            Nigeria. i have always been intrigue on how website and the internet
            works in general.
          </p>
          <p>
            I was opportuned to pursue my curiosity in tech early 2019, where i
            started with the basics; HTML, CSS and javascript. later advancing
            into more complex technologies and delving deeper into tech
          </p>
          <button>View My Resume</button>
        </div>
      </div>

      <div className="img">
        <img src={image} alt="img" />
      </div>
    </Main>
  );
}

export default About;
