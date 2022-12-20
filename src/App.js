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
    <div className="App">
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
    </div>
  );
}

export default App;

// import * as React from "react";
// import { motion, useViewportScroll, useTransform } from "framer-motion";

// export const Example = () => {
//   const { scrollYProgress } = useViewportScroll();
//   const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

//   return (
//     <div className="wrapper">
//       <motion.div
//         className="container"
//         style={{
//           scale,
//         }}
//       >
//         <motion.div
//           className="item"
//           style={{
//             scaleY: scrollYProgress,
//           }}
//         />
//       </motion.div>
//     </div>
//   );
// };
