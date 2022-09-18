import { Main } from "./style.js";

// import js from "./img/js.png";
// import css from "./img/css.png";
// import react from "./img/react.png";
function Skills() {
  const skill = [
    { text: "javascript", color: "teal" },
    { text: "CSS", color: "coral" },
    { text: "React", color: "#e8e8e8" },
    { text: "mongoDB", color: "peach" },
    { text: "Redux", color: "coral" },
  ];
  return (
    <Main id="Skill">
      <div className="texts">
        <h1>
          <span style={{ color: "dodgerblue" }}>Skills</span> and Experience
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          odio sunt eaque deleniti id, fugit distinctio rem? Porro perspiciatis
          corrupti veniam ducimus saepe explicabo odit, deserunt blanditiis quis
          dolorem adipisci excepturi. At tempore modi sunt asperiores, placeat a
          quos aut?
        </p>
      </div>
      <div className="flex">
        {skill.map((item) => (
          <div
            className="icon"
            style={{ background: item.color }}
            key={item.text}
          >
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </Main>
  );
}

export default Skills;
