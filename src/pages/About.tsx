
import { Element } from 'react-scroll';
import AboutMe from '../components/AboutMe';
import Development from '../components/Development/Development';

const About = () => {
    return (
        <Element name="about"className="about">
            <div  >
            <h2 className="headline headline--primary">About Me <span></span></h2>
            <AboutMe />
            <Development />
        </div>
        </Element>
        
    )
}

export default About;