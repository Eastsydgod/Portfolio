import { Main } from "./style.js";
import ColorTabs from "../components/skillTabs/Tabs";

function Skills() {
  return (
    <Main id="Skill">
      <div className="header">
        My skills and <span className="animateText">experience</span>
      </div>
      <ColorTabs />
    </Main>
  );
}

export default Skills;
