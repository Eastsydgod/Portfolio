import React, { useState, useEffect } from "react";
import { Style } from "./NavStyle.js";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function NavBar({ toggleDarkMode, isDarkMode }) {
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
        prevScrollPos - currentScrollPos > 50) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const color = { color: isDarkMode ? "#fff" : "#000" };
  return (
    <Style>
      <h4 style={color} className="logo">
        jemie.Dev
      </h4>
      <div className="navContainer">
        <nav
          style={{
            top: visible ? "0" : "-90px",
            background: isDarkMode ? "#2a2b3880" : " ",
          }}
        >
          <div className="navItem">
            <a href="#Home" style={color}>
              Home
            </a>
            <a href="#About" style={color}>
              About
            </a>
            <a href="#Skill" style={color}>
              Skill
            </a>
            <a href="#Projects" style={color}>
              Projects
            </a>
            <a href="#Contact" style={color}>
              Contact me
            </a>
          </div>
        </nav>
      </div>
      <div
        onClick={toggleDarkMode}
        className={isDarkMode ? "drkToggle" : "lghtToggle"}
      >
        {isDarkMode ? (
          <LightModeIcon style={color} />
        ) : (
          <DarkModeIcon style={color} />
        )}
      </div>
    </Style>
  );
}
