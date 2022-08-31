import { Main } from "./style.js";
import image from "./IMG-20220502-WA0038.jpg";
export default function Card() {
  return (
    <Main className="cards">
      <h1 className="blue">Why choose us</h1>
      <div className="container">
        <img src={image} alt="img" />
        <section>
          <div className="first">
            <div>
              <h3>Vision</h3>
              <p>
                adipisicing elit. Pariatur odio sunt eaque deleniti id, fugit
                distinctio rem? Porro perspiciatis corrupti veniam
              </p>
            </div>
            <div>
              <h3>Innovation</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur deleniti id, fugit
                distinctio rem? Porro perspiciatis corrupti veniam
              </p>
            </div>
          </div>
          <div className="second">
            <div>
              <h3>Bright Minds</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur odio Porro perspiciatis corrupti veniam
              </p>
            </div>
            <div>
              <h3>Experience</h3>
              <p>
                consectetur adipisicing elit. Pariatur odio sunt eaque deleniti
                id, fugit distinctio rem? veniam
              </p>
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
}
