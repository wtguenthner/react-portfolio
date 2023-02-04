import "./About.css";
import "../Nav/Nav.css";
import profile from "./img/profile_pic.jpeg";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { SiCodewars } from "react-icons/si";
import Animate from "../../Animate";
const About = () => (
  //  <div className="aboutMe">
  //   <span>About Me</span>
  //  </div>
  <Animate>
    <main className="aboutMe">
      <div className="aboutMeContainer">
        <div className="aboutMeTitle">ABOUT</div>
      </div>
      <div className="container">
        <p>I am currently in the restaurant industry looking to make a career
        change. I have many years of experience in customer service; coaching
        and managing team members; making quick decisions in a high volume/high
        stress environment; & excellent team building and communications skills
        among peers and customers.</p><br></br>
        <p> I began my restaurant career as a bartender
        and quickly moved into management. My passion and self motivation for
        hospitality has allowed me to easily learn and adapt into the positions
        I have attained over the years. This has allowed me to gain the
        knowledge and skills set to adapt into any environment, especially those
        that deal directly with customers.</p> <br></br><p>After receiving my certification for
        full stack web development through Georgia Tech I am actively looking
        for junior or entry level software engineering positions.</p>
      </div>
    </main>
  </Animate>
);

export default About;
