import About from "../About/about";
import Hero from "../hero/hero";
import Languages from "../Languages/languages";
import Card from "../reviews/card";
import Services from "../Services/services";
import { Main } from "./style.js";

function Home() {
 
  return (
    <Main>
      <Hero />
      <About />
      <Services />
      <Languages />
      <Card />
    </Main>
  );
}

export default Home;
