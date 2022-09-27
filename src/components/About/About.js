import './About.css';

import profile from './img/profile_pic.jpeg'

const About = () =>
    <main className='aboutMe'>
        <div className="profile">
            <div><img src= {profile}/></div>
        <p><h2>Welcome!</h2></p>
        <p><h3>I am a recent bootcamp graduate for full stack development based out of Atlanta, Georgia.</h3></p>
        <p><h3>Attended Georgia State University for Computer Science but made a career in the hospitality industry since.</h3></p>
        <p><h3>Eager and excited to start a new career in the coding industry.</h3></p>
        <p><h3>Questions or job oppurtunities?  Visit my contact page to submit an email.</h3></p>
        <p><h3>Links below for my profile pages.</h3></p>
        </div>
    </main>

export default About;