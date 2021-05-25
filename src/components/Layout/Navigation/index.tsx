import { useState } from 'react';
import Brand from './Brand';
import Menu from './Menu';
import SocialMedia from './SocialMedia';

const Navigation: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState<string | boolean>(false);

    const openMenuHandler = () => {
        setMenuOpen(!isMenuOpen); 
    }

    return (
        <nav className="navigation">

            <Brand />
            
            <Menu onClick={openMenuHandler} isMenuOpen={isMenuOpen} />

            <SocialMedia />
            
            {/* Hamburger Icon */}
            <div className="nav-icon" onClick={() => openMenuHandler()}>
                <button className="nav-icon__button"></button>
            </div>
            
        </nav>
    );
}

export default Navigation;