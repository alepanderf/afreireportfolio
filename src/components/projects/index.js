import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect} from 'react'
import { Loader } from 'react-loaders'
import Card from '../card'

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
                    strArray = {['P','r','o','j','e','c','t','s']}
                    idx={9}
                />
                </h1>
            </div>
        </div>
        <Loader type = "pacman"/>
        </>
    )
}

export default Projects