import { Main } from "./style.js";
import ColorTabs from "../components/skillTabs/Tabs";

function Skills() {
  return (
    <Main id="Skill">
        <h1>
          <span style={{ color: "dodgerblue" }}>Skills</span> and Experience
        </h1>
        <ColorTabs />
    </Main>
  );
}

export default Skills;
