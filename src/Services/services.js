import { Main } from "./style.js";
// import image from "../images/services.jpg"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EngineeringIcon from "@mui/icons-material/Engineering";
import StorageIcon from "@mui/icons-material/Storage";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import { Link } from "react-router-dom";
function Services() {
  return (
    <Main id='Services'>
      <h2>OUR SERVICES</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro explicabo
        quam magni rem, repudiandae aliquam minus dolorem quis nesciunt illum
        pariatur nam assumenda possimus nostrum deserunt molestiae atque libero
        ex.
      </p>
      <Link to="/Contact">
        <button>Contact Us</button>
      </Link>
      <div className="boxes">
        <div>
          <span>
            <EngineeringIcon className="icons" /> <p>Development</p>
          </span>
        </div>
        <div>
          <span>
            <StorageIcon className="icons" />
            <p>Hosting</p>
          </span>
        </div>
        <div>
          <span>
            <DeveloperBoardIcon className="icons" />
            <p>secure web</p>
          </span>
        </div>
      </div>
    </Main>
  );
}

export default Services;
