import { useState } from 'react';
import { Link } from 'react-scroll';
import Brand from './Brand';
import Media from './SocialMediaLinks';

const Sidebar = () => {
    const [isMenuOpen, setMenuOpen] = useState<string | boolean>('false');

    const openMenuHandler = () => {
        setMenuOpen(!isMenuOpen); 
    }

    return (
        <nav className="sidebar navigation">
            <Brand />
            
            {/* <Menu  isMenuOpen={isMenuOpen ? true : false } /> */}
            <nav className={isMenuOpen ? 'menu' : 'menu menu-open' }>
                <ul className="menu__list">
                    <li className="menu__item" onClick={() => openMenuHandler()}>
                        <Link activeClass="menu__item--active" to="portfolio" spy={true} smooth={true} duration={500} className="menu__link">
                            <i className="fas fa-palette"></i> 
                            Portfolio
                        </Link>
                    </li>
                    <li className="menu__item" onClick={() => openMenuHandler()}>
                        <Link activeClass="menu__item--active" to="about" spy={true} smooth={true} duration={500} className="menu__link">
                            <i className="fas fa-user"></i> 
                            about
                        </Link>
                    </li>
                    <li className="menu__item" onClick={() => openMenuHandler()}>
                        <Link activeClass="menu__item--active" to="contact" spy={true} smooth={true} duration={500} className="menu__link">
                            <i className="fas fa-envelope"></i> 
                            contact
                        </Link>
                    </li>
                </ul>
            </nav>


            <Media />
            
            <div className="nav-icon" onClick={() => openMenuHandler()}>
                <button className="nav-icon__button"></button>
            </div>
            
        </nav>
    );
}

export default Sidebar;