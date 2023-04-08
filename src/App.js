import About from "./About/about";
import Hero from "./hero/hero";
import Skills from "./skills/skills";
import Contact from "./contact/contact";
import "./App.css";
import NavBar from "./Navbar/Nav";
import Projects from "./projects/projects";
import Footer from "./Footer/Footer";
import Ham from "./Navbar/ham";
import { Link } from "react-router-dom";
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
      {/* <div className="subtext">
        <div className="header">
          <span className="animateText">Convinced yet ?</span> projects
        </div>
        <p>
          Thanks for stopping by, I’m currently looking to join a new team of
          creative designers and developers. <br />
          If you think we might be a good fit for one another, give me a call 🇳🇬
          or send me an email 📧.
        </p>
        <Link to="/contact">
          <button className="contactbtn">Contact me</button>
        </Link>
      </div> */}
      <Contact />
      <Footer />
      hiii
    </div>
  );
}

export default App;
