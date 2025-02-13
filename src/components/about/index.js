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
                        I'm a Junior currently pursuing my bachelor's degree in Computer Science from Rutgers University - New Brunswick. 
                        As an aspiring full-time backend or fullstack developer, I am seeking a fall 2025 internship or co-op in Software Engineering with an interest 
                        in industries ranging from big tech to fintech and even startups. Please do not hesitate to reach out to me via email or the built-in form on this website!  
                    </p>
                    <p>
                        I have experience in full-stack web development, through my previous internship at LG Electronics where I built several data modeling features utilizing efficient REST APIs and the nonrelational database MongoDB.
                        I am currently working on familiarizing myself with Springboot and AWS as I understand how vast scalable code-bases built using these framworks are for adding features and reusing functions due to its object-oriented nature. This 2025 summer I will be at Walmart in their Sunnyvale, CA office interning as a software engineer!
                    </p>
                    <p>
                        Outside of development, you can find me enjoying my hobbies such as weighted calisthenics, running, and practicing the violin as I am classically trained and enjoy learning new and challenging pieces.
                    </p>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default About
