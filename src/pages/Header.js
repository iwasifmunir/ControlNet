import React, { useState } from 'react';

const Header = () => {
    const [showNavLinks, setShowNavLinks] = useState(false);

    const toggleNavLinks = () => {
        setShowNavLinks(!showNavLinks);
    };

    return (
        <div className="navbar">
            <div className="logo">YourLogo</div>
            <div className="hamburger" onClick={toggleNavLinks}>&#9776;</div>
            <ul className={`nav-links ${showNavLinks ? 'show' : ''}`}>
                <li>Developer</li>
                <li>Token</li>
                <li>Signin</li>
                <li>Signup</li>
            </ul>
        </div>
    );
};

export default Header;
