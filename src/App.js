import About from "./About/about";
import Hero from "./hero/hero";
import Skills from "./skills/skills";

import Contact from "./contact/contact";
import "./App.css";
import NavBar from "./Navbar/Nav";
import Projects from "./projects/projects";
import Footer from "./Footer/Footer";
import Ham from "./Navbar/ham";
import Card from "./reviews/card";

function App() {
  return (
    <div className="App">
      <span className="nav">
        <NavBar />
      </span>
      <div>
        <Ham />
      </div>
      <Hero />
      <About />
      <Skills />
      <Projects />
  <Card/>
      <Contact />
      <Footer />
      hiii
    </div>
  );
}

export default App;
<<<<<<< HEAD
=======

>>>>>>> af1f99ff3e3349830f4fe888d89c1d6e042e09e1
