import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/a1.png'
import LogoSubtitle from '../../assets/images/alejandro_name2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faCode, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Burger Button for Mobile */}
            <button className="burger-menu" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>

            {/* Sidebar */}
            <div className={`nav-bar ${isOpen ? 'open' : ''}`}>
                <Link className='logo' to='/' onClick={() => setIsOpen(false)}>
                    <img src={LogoS} alt="logo" />
                    <img className="sub-logo" src={LogoSubtitle} alt="Alejandro" />
                </Link>

                <nav>
                    <NavLink exact="true" activeclassname="active" to="/" onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects" onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
                    </NavLink>
                </nav>

                <ul>
                    <li>
                        <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/alejandro-freire-880b581b5/'>
                            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                        </a>
                        <a target="_blank" rel='noreferrer' href="https://github.com/alepanderf">
                            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                        </a>
                        <a target="_blank" rel='noreferrer' href="https://www.instagram.com/alejandrosfreire/">
                            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
