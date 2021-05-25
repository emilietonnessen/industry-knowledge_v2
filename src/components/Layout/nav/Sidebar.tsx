import { useState } from 'react';
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
                    <li className="menu__item" >
                        <a href="#portfolio" className="menu__link" onClick={() => openMenuHandler()}>
                            <i className="fas fa-palette"></i> 
                            Portfolio
                        </a>
                    </li>
                    <li className="menu__item" onClick={() => openMenuHandler()}>
                        <a href="#about" className="menu__link">
                            <i className="fas fa-user"></i> 
                            about
                        </a>
                    </li>
                    <li className="menu__item" onClick={() => openMenuHandler()}>
                        <a href="#contact" className="menu__link">
                            <i className="fas fa-envelope"></i> 
                            contact
                        </a>
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