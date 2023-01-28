import { Main } from "./style.js";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
function Contact() {
  return (
    <Main id="Contact">
      <p>
        Contact <span style={{ color: "coral" }}>Me</span>
      </p>
      <h1>Get In Touch</h1>
      <div>
        <p>
          You have an awesome idea you want me to jump on? Feel free to contact
          me, if you have other request my inbox is always open. Whether you
          have a question or just want to say hi, I'll try my best to get back
          to you!
        </p>
      </div>
      <button
        onClick={() => (window.location = "mailto:jemieofoegbu@gmail.com")}
      >
        send me a mail
      </button>
    </Main>
  );
}

export default Contact;
