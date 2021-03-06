import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import logo from '../../img/logo.png';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__left">
                        <div className="header__logo">
                            <Link to="/">
                                <img src={logo} alt="header logo" />
                            </Link>
                        </div>
                        <nav className="header__nav">
                            <ul>
                                <li>
                                    <Link to="/movies">Movies</Link>
                                </li>
                                <li>
                                    <Link to="/series">Series</Link>
                                </li>
                                <li>
                                    <Link to="/shows">TV Shows</Link>
                                </li>
                                <li>
                                    <Link to="/list">My List</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__right">
                        <div className="header__auth">
                            <Link to="#">Log In</Link>
                            <Link to="#">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;