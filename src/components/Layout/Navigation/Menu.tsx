import React from 'react';
import { Link } from 'react-scroll';
import { NavigationMenuProps } from '../../../constants/interfaces';


const Menu: React.FC<NavigationMenuProps> = ({isMenuOpen, onClick}) => (
    <nav className={isMenuOpen ? 'menu' : 'menu menu-open' }>
        <ul className="menu__list">
            <li className="menu__item" onClick={onClick}>
                <Link activeClass="menu__item--active" to="portfolio" spy={true} smooth={true} duration={500} className="menu__link">
                    <i className="fas fa-palette"></i> 
                    Portfolio
                </Link>
            </li>
            <li className="menu__item" onClick={onClick}>
                <Link activeClass="menu__item--active" to="about" spy={true} smooth={true} duration={500} className="menu__link">
                    <i className="fas fa-user"></i> 
                    about me
                </Link>
            </li>
            <li className="menu__item" onClick={onClick}>
                <Link activeClass="menu__item--active" to="contact" spy={true} smooth={true} duration={500} className="menu__link">
                    <i className="fas fa-envelope"></i> 
                    contact me
                </Link>
            </li>
        </ul>
    </nav>
);


export default Menu;