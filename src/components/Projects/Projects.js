import "./Projects.css";
import projects from "./Projects.json";
import { GoMarkGithub } from "react-icons/go";
import { GiSwordsEmblem } from "react-icons/gi";
import { GiPartyPopper } from "react-icons/gi";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdQuiz } from "react-icons/md";
import { ImProfile } from "react-icons/im";
const Projects = () => (
  <main className="Projects">
    <div className="projectContainer">
      <div className="projectTitle">PROJECTS</div>
    </div>
    <div className="container">
      {projects.map((app) => (
        <a href={app.link}>
          <div className="app">
            <div class="iconBox">
              <span className="icon">
                {app.image === "dungeon" ? (
                  <GiSwordsEmblem />
                ) : app.image === "event" ? (
                  <GiPartyPopper />
                ) : app.image === "weather" ? (
                  <TiWeatherPartlySunny />
                ) : app.image ==="planner" ? (
                  <BsFillCalendarEventFill />
                ) : app.image === "quiz" ? (
                  <MdQuiz />
                ) : (
                  <ImProfile />
                )}
              </span>
            </div>

            <div className="description">
              <h3>{app.title}</h3>
              <p>{app.description}</p>
              <br></br>
              <p>{app.languages}</p>
              <br></br>
              <p id="gitLink">
                
                <a href={app.repo}>
                  <GoMarkGithub />
                </a>
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  </main>
);

export default Projects;
