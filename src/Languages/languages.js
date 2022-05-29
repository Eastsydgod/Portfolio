import { Main } from "./style.js";
import HtmlIcon from "@mui/icons-material/Html";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
function Languages() {
  return (
    <Main id='Technology'>
      <div className="texts">
        <h1>Technologies</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          odio sunt eaque deleniti id, fugit distinctio rem? Porro perspiciatis
          corrupti veniam ducimus saepe explicabo odit, deserunt blanditiis quis
          dolorem adipisci excepturi. At tempore modi sunt asperiores, placeat a
          quos aut?
        </p>
      </div>
      <div className="icons">
        <div>
          <HtmlIcon />
        </div>
        <div>
          <CssIcon />
        </div>
        <div>
          <JavascriptIcon />
        </div>
      </div>
    </Main>
  );
}

export default Languages;
