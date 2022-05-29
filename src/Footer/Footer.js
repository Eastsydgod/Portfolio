import React from "react";
import { FooterStyle } from "./style";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import PinterestIcon from "@mui/icons-material/Pinterest";
import AnchorIcon from "@mui/icons-material/Anchor";

const Footer = () => {
  return (
    <FooterStyle>
      <section className="Content">
        <div className="first">
          <span>
            <h1> Jemienachukwu </h1>
            <AnchorIcon />
          </span>

          <p>
            adipisicing elit. Pariatur odio sunt eaque deleniti id, fugit
            distinctio rem? Porro perspiciatis corrupti veniam
          </p>
        </div>

        <div className="second">
          <h1>CONTACT INFORMATION</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> <br />
            jemieofoegbu@gmail.com
          </p>
        </div>
      </section>
      <section className="copy">JEMIE &copy; All rights reserved</section>
    </FooterStyle>
  );
};

export default Footer;
