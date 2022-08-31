import { Main } from "./aboutstyle";
import image from "./IMG-20220502-WA0038.jpg";
function About() {
  return (
    <Main id='About'>
      <div className="Texts">
        <div className="texts">
          <h1><span style={{ color: "coral" }}>About</span> Me </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            dolorem sint, officia optio modi minima nam porro, exercitationem
            ipsam quas atque maiores voluptate! Unde accusamus eveniet ex, rem
            excepturi ipsam?{" "}
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            odio sunt eaque deleniti id, fugit distinctio rem? Porro
            perspiciatis corrupti veniam ducimus saepe explicabo odit, deserunt
            blanditiis quis dolorem adipisci excepturi. At tempore modi sunt
            asperiores, placeat a quos aut?
          </p>
        </div>
      </div>
      <div className="Img">
        <div className="img">
          <img src={image} alt="img" />
        </div>
      </div>
    </Main>
  );
}

export default About;
