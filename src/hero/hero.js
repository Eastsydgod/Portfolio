import React from "react";
import { Main } from "./Herostyle.js";
import "../images/hero.jpg";
import AnchorIcon from "@mui/icons-material/Anchor";
import TemporaryDrawer from "./ham/Nav.js";
import { Link } from "react-router-dom";
import { ArrowDropDown } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Hero() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Main id="home">
      <nav>
        <div>
          <h2>JEMIENACHUKWU</h2> <AnchorIcon />
        </div>

        <div className="NavLink">
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>
              <a
                href="#About"
                className="links"
                style={{ textDecoration: "none", color: "#000" }}
              >
                About
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a
                href="#Services"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Services
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a
                href="#Technology"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Technology
              </a>
            </MenuItem>
          </Menu>
          <div className="drop-container">
            <span className="home-link">
              <Link to="/" className="link">
                <li>Home</li>
              </Link>
              <p
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <ArrowDropDown style={{ cursor:'pointer'}}/>
              </p>
            </span>
          </div>
          <Link to="/contact" className="link">
            <li>Contact us</li>
          </Link>
          <Link to="/portfolio" className="link">
            <li>Portfolio</li>
          </Link>
        </div>
        <div className="TemporaryDrawer">
          <TemporaryDrawer />
        </div>
      </nav>
      <div className="text">
        <h1>Web Developer</h1>
        <p>
          Lorem ipsum maiores totam accusantium laudantium, neque nihil corrupti
          nostrum? dolor sit amet, consectetur adipisicing elit. Voluptas fugiat
          itaque maiores totam accusantium laudantium, neque nihil corrupti
          nostrum? Harum, nihil eius! Iste, quam ipsa!
        </p>
      </div>
    </Main>
  );
}

export default Hero;
