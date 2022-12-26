import "./About.css";
import "../Nav/Nav.css"
import profile from "./img/profile_pic.jpeg";
import { GoMarkGithub } from "react-icons/go";
import {BsLinkedin} from "react-icons/bs";
import {SiCodewars} from "react-icons/si";
import Animate from "../../Animate";
const About = () => (
  //  <div className="aboutMe">
  //   <span>About Me</span>
  //  </div>
  <Animate>
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
  </Animate>
);

export default About;
