import './Nav.css';


const Nav = (props) => 


    <nav>
        
        <div className="title"><h1>Taylor Guenthner<span><p className="titleDescription">Front and Back-end Developer</p></span></h1>
            
        </div>
        <div className='links'>
            
            <button className="aboutlink" onClick = {() => props.page('about')}>About Me</button>
            <button className='projectlink' onClick = {() => props.page('projects')}>Projects</button>
            <button className='contactlink' onClick = {() => props.page('contact')}>Contact</button>
            <button className = 'resumelink'onClick = {() => props.page('resume')}>Resume</button>
            
        </div>
    </nav>
    

export default Nav;