import { Main } from "./style.js";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
function Contact() {
  return (
    <Main id='Contact'>
      <div className="container">
        <div className="left">
          <h1>WELCOME</h1>
          <h2>Let's connect</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            dolorem sint, officia optio modi minima nam porro, exercitationem
            ipsam quas atque maiores voluptate! Unde accusamus eveniet ex, rem
            excepturi ipsam?
          </p>
          <div>
            <MailOutlineIcon className="icons" />
            jemieofoegbu@gmail.com
          </div>
          <div>
            <LocalPhoneIcon className="icons" />
            +2349024038802
          </div>
          <div>
            <LocationOnIcon className="icons" />
            Owerri , Nigeria
          </div>
        </div>

        {/* right side */}

        <div className="right">
          <form>
            <h2>Send us a message</h2>
            <span>
              <input type="text" placeholder="Name"/>
            </span>

            <div className="flex-span">
              <span>
                <input type="tel" placeholder="Phone Number"/>
              </span>
              
              <span>
                <input type="email" placeholder="E-email Address"/>
              </span>
            </div>

          
            <span>
              <p>Message</p>
              <textarea
                type="textarea"
                placeholder="Your message here..."
                className="review--area"
              />
            </span>
            <div className="btn">
              <button>Message us</button>
            </div>
          </form>
        </div>
      </div>
    </Main>
  );
}

export default Contact;
