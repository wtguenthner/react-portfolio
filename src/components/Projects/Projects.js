import "./Projects.css";
import projects from "./Projects.json";
import work1 from "./img/work1.jpeg";
const Projects = () =>
    <main className="Projects">
        {projects.map(app=>
            <section key={app.key} className='app'>
                <a href={app.link}><img src={app.image} />
                <div>
                    <h2>{app.title}</h2>
                    <h4>Description: {app.description}</h4>
                </div>
                </a>
            </section>
        )}
    </main>

export default Projects;