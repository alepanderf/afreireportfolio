import LogoTitle from  '../../assets/images/a1.png';
import './index.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['l','e','j','a','n','d','r','o']
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        // Cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
    }, [])

    return (
        <>
        <div className="container home-page">  
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                </h1>
                <Link to="/contact" className='flat-button'>
                    CONTACT ME
                </Link>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    );
}
export default Home