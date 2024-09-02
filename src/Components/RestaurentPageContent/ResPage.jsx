import { useEffect, useState } from 'react';
import '../RestaurentPageContent/ResPage.css';
import { Link } from 'react-router-dom';

export const ResPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="logo-title">
                <img src="/path-to-your-logo.png" alt="Logo" className="logo" />
                <h2 className="title">Zomato</h2>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                {isMobile && isOpen && (
                    <>
                        <li className="menu-title">
                            <h2>Zomato</h2>
                        </li>
                        <li>
                            <button 
                                className="close-menu" 
                                onClick={() => setIsOpen(false)}
                            >
                                &times;
                            </button>
                        </li>
                    </>
                )}
                <li><p>Advertise</p></li>
                <li><button>Login</button></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
}
