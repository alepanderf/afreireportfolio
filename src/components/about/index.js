import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import { Loader } from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timeoutId)
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
                        I'm a rising Junior currently pursuing my bachelor's degree in Computer Science from Rutgers University - New Brunswick. 
                        As an aspiring full-time Software Engineer, I am seeking intern and co-op Software Engineering positions with an interest 
                        in fintech and the applications of modern technologies to facilitate business processes for employers. I am also very 
                        interested and keen on working for a start-up before my graduation.  
                    </p>
                    <p>
                        I have experience in full-stack web development, as well as RESTful APIs and a robust understanding of complex backend 
                        frameworks such as Spring Boot or Flask. I am currently working on familiarizing myself with Python libraries such as 
                        PyTorch and TensorFlow to deepen my understanding of the applications of machine learning.
                    </p>
                    <p>
                        Outside of development, I am currently working on turning my muscle-ups into strict muscle-ups without the need for 
                        swinging, as well as improving my technique on the violin, which I have practiced for 8+ years now. I specifically enjoy 
                        performing chamber music.
                    </p>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default About
