import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect} from 'react'
import { Loader } from 'react-loaders'

const Projects = () => {

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
        <div className='container projects-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray = {['P','r','o','j','e','c','t','s',' ','b','e','i','n','g',' ','b','u','i','l','t.',' ',' ',' ',' ','','C','h','e','c','k',' ','b','a','c','k',' ','s','o','o','n',' ',':)']}
                    idx={50}
                />
                </h1>
            </div>
        </div>
        <Loader type = "pacman"/>
        </>
    )
}

export default Projects