import About from "./About/about";
import Hero from "./hero/hero";
import Skills from "./skills/skills";
import Contact from "./contact/contact";
import "./App.css";
import NavBar from "./Navbar/Nav";
import Projects from "./projects/projects";
import React, { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className={isDarkMode ? "darkMode" : "LightMode"}>
      <span className="nav">
        <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </span>
      {/* <div className="ham">
        <Ham toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </div> */}
      <Hero isDarkMode={isDarkMode} />
      <About />
      <Skills />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
