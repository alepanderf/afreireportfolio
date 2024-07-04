import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect} from 'react';
import { faCss3, faGitAlt, faReact, faHtml5, faJsSquare, faJava } from '@fortawesome/free-brands-svg-icons';
import { Loader } from 'react-loaders';


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        // Cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
    }, [])


    return (
        <>    
            <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm a rising Junior currently pursuing my bachelors degree in Computer Science from Rutgers University - New Brunswick. As an aspiring full-time Software Engineer, I am seeking intern and co-op Software Engineering positions with an interest in fintech and the applications of modern technologies to facilitate business processes for employers. I am also very interested and keen on working for a start-up before my graduation.  
                </p>
                <p>
                    I have experience in full-stack web-development, as well as RESTful APIs and a robust understanding of complex backend frameworks such as Springboot or Flask. I am currently working on familiarizing myself with Python libraries such as PyTorch and TensorFlow to deepen my understand of the applications of machine learning.
                </p>
                <p>
                    As for outside of development, I am currently working on turning my muscle ups into strict muscle ups without the need of swinging, as well as improving my technique on the violin as I have practiced it for 8+ years now. I specifically am a big fan of performing chamber music.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJava} color='#FFCC66'/>
                    </div>
                </div>
            </div>
            </div>
            <Loader type = "pacman"/>
        </>
    )
}

export default About