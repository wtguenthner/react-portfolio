import "./Projects.css";
import projects from "./Projects.json";

import { GiSwordsEmblem } from "react-icons/gi";
import { GiPartyPopper } from "react-icons/gi";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdQuiz } from "react-icons/md";
import { ImProfile } from "react-icons/im";
const Projects = () => (
  <main className="Projects">
    <div className="container">
      {projects.map((app) => (
        <a href={app.link}>
          <div className="app">
            <div class="iconBox">
              <span className="icon">
                {app.image == "dungeon" ? (
                  <GiSwordsEmblem />
                ) : app.image == "event" ? (
                  <GiPartyPopper />
                ) : app.image == "weather" ? (
                  <TiWeatherPartlySunny />
                ) : app.image == "planner" ? (
                  <BsFillCalendarEventFill />
                ) : app.image == "quiz" ? (
                  <MdQuiz />
                ) : (
                  <ImProfile />
                )}
              </span>
            </div>

            <div className="description">
              <h3>{app.title}</h3>
              <p>{app.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  </main>
);

export default Projects;
