import React from 'react';

import logo from '../../img/logo.png';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__left">
                        <div className="header__logo">
                            <img src={logo} alt="header logo" />
                        </div>
                        <nav className="header__nav">
                            <ul>
                                <li><a href="#">Movies</a></li>
                                <li><a href="#">Series</a></li>
                                <li><a href="#">TV Shows</a></li>
                                <li><a href="#">My List</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__right">
                        <div className="header__auth">
                            <a href="#">Log In</a>
                            <a href="#">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;