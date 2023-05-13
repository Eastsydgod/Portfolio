import React, { useState, useEffect } from "react";
import { Style } from "./NavStyle.js";

export default function NavBar() {
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

  return (
    <Style>
      <h4 className="logo">jemie.Dev</h4>
      <div className="navContainer">
        <nav style={{ top: visible ? "0" : "-90px" }}>
          <div className="navItem">
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Skill">Skill</a>
            <a href="#Projects">Projects</a>
            <a href="#Contact">Contact me</a>
          </div>
        </nav>
      </div>
      <div className="toggle">
        <button>day</button>
      </div>
    </Style>
  );
}
