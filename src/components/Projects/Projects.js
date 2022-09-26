import "./Projects.css";
import projects from "./Projects.json";
import dungeon from './img/DungeonsNDevs.png';
import eventFinder from './img/event-finder.png';
import wk1 from './img/work1.jpeg'
import wk2 from './img/work2.jpeg'

const Projects = () =>
    <main className="Projects">
        {projects.map(app=>
            <section key={app.key} className='app'>
               
                <a href={app.link}><img src={app.image=="dungeon"? dungeon:eventFinder} />
                
                {/* <div>
                    <h2>{app.title}</h2>
                    <h4>Description: {app.description}</h4>
                </div> */}
                </a>
            </section>
        )}
    </main>

export default Projects;