import { Main } from "./style.js";

function Contact() {
  return (
    <Main id="Contact">
      <p className="contactMe-Text">Contact Me</p>
      <div>
        <h1>Would You like to work with me ?</h1>

        <p>
          Thanks for stopping by, I’m currently looking to join a new team of
          creative designers and developers. If you think we might be a good fit
          for one another, give me a call 🇳🇬 or send me an email 📧.
        </p>

        <a href="mailto">
          <button>send me a mail</button>
        </a>
      </div>
    </Main>
  );
}

export default Contact;
