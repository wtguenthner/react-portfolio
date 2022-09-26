import "./Projects.css";
import projects from "./Projects.json";
import dungeon from './img/DungeonsNDevs.png';
import eventFinder from './img/event-finder.png';
import weatherApp from './img/weatherapp.png';
import planner from './img/planner.png'
const Projects = () =>
    <main className="Projects">
        {projects.map(app=>
            <section key={app.key} className='app'>
               
                <a href={app.link}><img src={app.image=="dungeon"? dungeon:app.image =="event"?eventFinder: app.image == "weather"? weatherApp: planner} />
                
                {/* <div>
                    <h2>{app.title}</h2>
                    <h4>Description: {app.description}</h4>
                </div> */}
                </a>
            </section>
        )}
    </main>

export default Projects;