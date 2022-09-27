import './Footer.css';
import { GoMarkGithub } from "react-icons/go";
import {BsLinkedin} from "react-icons/bs"
import {SiCodewars} from "react-icons/si"
const Footer = () =>
<footer>
<div className = "icon"><a href="https://github.com/wtguenthner"><GoMarkGithub /></a></div>
<div className = "icon"><a href="https://www.linkedin.com/in/taylor-guenthner"><BsLinkedin /></a></div>
<div className = "icon"><a href="https://www.codewars.com/users/wtguenthner"><SiCodewars /></a></div>
</footer>

export default Footer;


