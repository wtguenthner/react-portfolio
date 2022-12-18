import "./About.css";
import "../Nav/Nav.css"
import profile from "./img/profile_pic.jpeg";
import { GoMarkGithub } from "react-icons/go";
import {BsLinkedin} from "react-icons/bs"
import {SiCodewars} from "react-icons/si"

const About = () => (
  //  <div className="aboutMe">
  //   <span>About Me</span>
  //  </div>
  <main className="aboutMe">
     
    <div className="profile">
      {/* <div>
        <img src={profile} />
      </div> */}
      <p>
        <h3></h3>
        <div className = "contactLinks">
        <div className = "icon"><a href="https://github.com/wtguenthner"><GoMarkGithub /></a></div>
<div className = "icon"><a href="https://www.linkedin.com/in/taylor-guenthner"><BsLinkedin /></a></div>
<div className = "icon"><a href="https://www.codewars.com/users/wtguenthner"><SiCodewars /></a></div>
</div>
      </p>
     
    </div>
  </main>
);

export default About;
