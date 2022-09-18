// import Home from './home/home'

// export default function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   )
// }

import About from "./About/about";
import Hero from "./hero/hero";
import Skills from "./skills/skills";
import Card from "./reviews/card";
import Contact from "./contact/contact";
import "./App.css";
import NavBar from "./Navbar/Nav";
import Projects from "./projects/projects";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <span className="nav">
        <NavBar />
      </span>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Card />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
