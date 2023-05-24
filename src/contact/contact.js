import { Main } from "./style.js";

function Contact({ isDarkMode }) {
  return (
    <Main id="Contact">
      <p
        className="contactMe-Text"
        style={{
          background: isDarkMode ? "#2a2b3880" : "#EEEEEE",
          color: isDarkMode ? "#fff" : "#000",
        }}
      >
        Contact Me
      </p>
      <div>
        <h1>Would You like to work with me ?</h1>

        <p>
          Thanks for stopping by, I’m currently looking to join a new team of
          creative designers and developers. If you think we might be a good fit
          for one another, give me a call 🇳🇬 or send me an email 📧.
        </p>

        <a href="mailto:jemieofoegbu@gmail.com">
          <button className={isDarkMode ? "drkBtn" : "lghtBtn"}>
            send me a mail
          </button>
        </a>
      </div>
    </Main>
  );
}

export default Contact;
