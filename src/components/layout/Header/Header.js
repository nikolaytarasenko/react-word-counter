import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">Word counter</h1>
                <a href="https://github.com/nikolaytarasenko/react-word-counter" target="_blank" rel="noopener noreferrer" className="header__link">github</a>
            </div>
        </header>
    )
};

export default Header;