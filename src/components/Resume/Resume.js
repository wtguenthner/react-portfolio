import './Resume.css';
import resume1 from './assets/TG Resume 2020.pdf'
import {GrDocumentPdf} from 'react-icons/gr'
const Resume= () =>
    <main className='resume'>
        <div className="container">
            <div className="hospitalityResume"><h1><a href= {resume1} download="Taylor Guenthner Resume"><GrDocumentPdf/></a></h1>
            <span>Hospitality Resume</span>
            </div>
            <div className="developerResume"><h1><a href= '#'download="Taylor Guenthner Resume"><GrDocumentPdf/></a></h1>
            <span>Developer Resume</span>
        
            </div>
        </div>
    </main>

    export default Resume