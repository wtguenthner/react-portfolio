import "./Nav.css";
import logo from "./img/logo.png";
import { Routes, Route,NavLink} from "react-router-dom";
import {  useState } from "react";

const Nav = (props) => {
 
  const [toggle, setToggle] = useState("navbar");
  const [homeActive, setHomeActive] = useState("nav-item");
  const [aboutActive, setAboutActive] = useState("nav-item");
  const [projectActive, setProjectActive] = useState("nav-item");
  const [messageActive, setMessageActive] = useState("nav-item");
  const [resumeActive, setResumeActive] = useState("nav-item");
  function buttonActive(item) {
    setHomeActive("nav-item");
    setAboutActive("nav-item");
    setProjectActive("nav-item");
    setMessageActive("nav-item");
    setResumeActive("nav-item");
    switch (item) {
      case 0:
        setHomeActive("nav-item active");
        break;
      case 1:
        
        setAboutActive("nav-item active");
      
        break;
      case 2:
        setProjectActive("nav-item active");
        break;
      case 3:
        setMessageActive("nav-item active");
        break;
      case 4:
        setResumeActive("nav-item active");
        break;
      default:
        break;
    }
  }

  function navToggle() {
    if (toggle === "navbar") {
      setToggle("navbar open");
    } else {
      setToggle("navbar");
    }
  }
  return (
    <>
      <div className={toggle}>
        <div className="toggle">
          <span onClick={navToggle}>
            <i className="bx bx-chevron-right"></i>
          </span>
        </div>
        <div className="Logo">
          <img src={logo} alt="TG Logo"></img>
          <h3>Taylor Guenthner</h3>
        </div>
        <nav>
          <div className="nav-title">Navigation</div>
          <ul>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <li
              onClick={() => {
                
                buttonActive(0);
               
              }}
              className={homeActive}
            >
              <i className="bx bx-home"></i>
              <span className="navText">Home</span>
            </li>
            </NavLink>
            <NavLink to="/about" style={{ textDecoration: 'none' }}>
            <li
              onClick={() => {
                buttonActive(1);
                
              }}
              className={aboutActive}
            >
              <i className="bx bx-user"></i>
              <span className="navText">About</span>
            </li>
            </NavLink>
            <NavLink to="/projects" style={{ textDecoration: 'none' }}>
            <li
              onClick={() => {
                buttonActive(2);
                
              }}
              className={projectActive}
            >
              <i className="bx bx-archive"></i>
              <span className="navText">Projects</span>
            </li>
            </NavLink>
          </ul>
          <hr></hr>
          <div className="nav-title">Contact</div>
          <ul>
          <NavLink to="/contact" style={{ textDecoration: 'none' }}>
            <li
              onClick={() => {
                buttonActive(3);
                
              }}
              className={messageActive}
            >
              <i className="bx bx-message-edit"></i>
              <span className="navText">Send Message</span>
            </li>
            </NavLink>
            <NavLink to="/resume" style={{ textDecoration: 'none' }}>
            <li
              onClick={() => {
                buttonActive(4);
                
              }}
              className={resumeActive}
            >
              <i className="bx bx-file-blank"></i>
              <span className="navText">Resume</span>
            </li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
