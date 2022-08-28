import { Main } from "./style.js";

import js from './img/js.png'
import css from './img/css.png'
import react from './img/react.png'
function Skills() {

  const skill = [
    {img:js, text:'javascript'},
    {img:css, text:'CSS', color:'coral'},
    {img:react, text:'React', color:'#e8e8e8'}
  ]
  return (
    <Main id='Skill'>
      <div className="texts">
        <h1>Skills and Experience</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          odio sunt eaque deleniti id, fugit distinctio rem? Porro perspiciatis
          corrupti veniam ducimus saepe explicabo odit, deserunt blanditiis quis
          dolorem adipisci excepturi. At tempore modi sunt asperiores, placeat a
          quos aut?
        </p>
      </div>
{skill.map(item=> (
       <div className="icons" key={item.text}>
          <div className="container">
            <div className='icon' style={{background:item.color}}>
              <img src={item.img} alt='img'/>
            </div>
            <p>{item.text}</p>
          </div>
          </div>
))}
    
    </Main>
  );
}

export default Skills;
