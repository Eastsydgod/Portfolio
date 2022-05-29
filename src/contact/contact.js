import { Main } from "./style.js";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
function Contact() {
  return (
    <Main id='Contactus'>
      <Link to="/" className="home">
        <ArrowBackIosNewIcon />
        <h2>HOME</h2>
      </Link>
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
              <p>Name</p>
              <input type="text" />
            </span>

            <div className="flex-span">
              <span>
                <p>Phone Number</p>
                <input type="tel" />
              </span>
              
              <span>
                <p>E-email Address</p>
                <input type="email" />
              </span>
            </div>

            <span>
              <p>Company Name</p>
              <input type="text" />
            </span>
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
