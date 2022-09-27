import './Nav.css';

const Nav = props =>
    <nav>
        <div className="title"><h1>Taylor Guenthner<span><p className="titleDescription">Front and Back-end Developer</p></span></h1>
            
        </div>
        <div className='links'>
            
            <button onClick = {() => props.page('about')}>About Me</button>
            <button onClick = {() => props.page('projects')}>Projects</button>
            <button onClick = {() => props.page('contact')}>Contact</button>
            <button onClick = {() => props.page('resume')}>Resume</button>
            
        </div>
    </nav>

export default Nav;