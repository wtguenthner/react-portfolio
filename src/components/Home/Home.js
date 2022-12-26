import "./Home.css";
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
        <h1>hi I'm <span style={{color:'#06b304'}}>Taylor</span>.</h1>
        <h2>Full Stack Web Developer</h2>
        <h3>Atlanta, GA</h3>
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
