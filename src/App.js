import About from "./About/about";
import Hero from "./hero/hero";
import Skills from "./skills/skills";
import Card from "./reviews/card";
import Contact from "./contact/contact";
import "./App.css";
import NavBar from "./Navbar/Nav";
import Projects from "./projects/projects";
import Footer from "./Footer/Footer";
import Ham from "./Navbar/ham";

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
      <Card />
      <Contact />
      <Footer />
      hiii
    </div>
  );
}

export default App;
