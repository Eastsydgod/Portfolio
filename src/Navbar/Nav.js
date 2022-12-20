import React, { useState, useEffect } from "react";
import { Style } from "./NavStyle.js";
import { Close, Menu } from "@mui/icons-material";

export default function NavBar() {
  const [Toggle, setToggle] = useState(false);
  function HandelClick() {
    setToggle(!Toggle);
  }

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <Style>
      <nav style={{ top: visible ? "0" : "-60px" }}>
        <div className="navItem">
          <a href="#Home">
            <div>Home</div>
          </a>
          <a href="#About">
            <div>About</div>
          </a>

          <a href="#Skill">
            <div>Skill</div>
          </a>

          <a href="#Projects">
            <div>Projects </div>
          </a>

          <a href="#Contact">
            <div>Contact me</div>
          </a>
        </div>
        <div className="Ham">
          {Toggle ? (
            <Close onClick={HandelClick} />
          ) : (
            <Menu onClick={HandelClick} />
          )}
        </div>
      </nav>
      {Toggle && (
        <div className="TemporaryDrawer">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Skill">Skill</a>
          <a href="#Projects">Projects</a>
        </div>
      )}
    </Style>
  );
}




