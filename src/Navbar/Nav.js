import React, { useState, useEffect } from "react";
import { Style } from "./NavStyle.js";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export default function NavBar({ toggleDarkMode, isDarkMode }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);

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
      <nav
        style={{
          top: visible ? "0" : "-90px",
          background: isDarkMode ? "#2a2b3880" : " ",
        }}
      >
        <h4 style={color} className="logo">
          Eastsyd
        </h4>
        <div className="navItem">
          <a href="mailto:jamesnuel247@gmail.com">
            <button
              style={{
                background: isDarkMode ? "#2a2b3880" : "#EEEEEE",
                color: isDarkMode ? "#fff" : "#000",
              }}
            >
              Contact Me
            </button>
          </a>
          <a href="https://docs.google.com/document/d/1mtHza1j34uL7jsPPLae6cK0kcG_M4AOBflXvnIoykwY/edit?usp=sharing">
            <button
              style={{
                background: isDarkMode ? "#2a2b3880" : "#EEEEEE",
                color: isDarkMode ? "#fff" : "#000",
              }}
            >
              Read My CV
            </button>
          </a>

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
        </div>
      </nav>
      <AppBar component="nav" className="mobileNav">
        <Toolbar className="hamNav">
          <h4 style={color}>jemie.Dev</h4>
          <div>
            <div onClick={toggleDarkMode} className="toggle">
              {isDarkMode ? (
                <LightModeIcon style={color} />
              ) : (
                <DarkModeIcon style={color} />
              )}
            </div>

            <IconButton
              onClick={() => setShow((prevshow) => !prevshow)}
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, display: { sm: "none" }, color: color }}
            >
              {show ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {show && (
        <div
          className="dropDownContainer"
          style={{
            background: isDarkMode ? "#10101a" : "#fff",
          }}
        >
          <div
            style={{
              marginTop: "100px",
            }}
          >
            <a href="mailto:jemieofoegbu@gmail.com">
              <button
                style={{
                  background: isDarkMode ? "#2a2b3880" : "#EEEEEE",
                  color: isDarkMode ? "#fff" : "#000",
                }}
              >
                Contact Me
              </button>
            </a>
            <a href="https://docs.google.com/document/d/1mtHza1j34uL7jsPPLae6cK0kcG_M4AOBflXvnIoykwY/edit?usp=sharing">
              <button
                style={{
                  background: isDarkMode ? "#2a2b3880" : "#EEEEEE",
                  color: isDarkMode ? "#fff" : "#000",
                }}
              >
                Read My CV
              </button>
            </a>
          </div>
        </div>
      )}
    </Style>
  );
}
