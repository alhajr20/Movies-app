import React from 'react';

import logo from '../../img/logo.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        <img src={logo} alt="footer logo" />
                    </div>
                    <div className="footer__right">
                        <div className="footer__links">
                            <ul>
                                <li>
                                    <a href="#">Movies</a>
                                </li>
                                <li>
                                    <a href="#">Series</a>
                                </li>
                                <li>
                                    <a href="#">TV Shows</a>
                                </li>
                                <li>
                                    <a href="#">My List</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__links">
                            <ul>
                                <li>
                                    <a href="#">Movies</a>
                                </li>
                                <li>
                                    <a href="#">Series</a>
                                </li>
                                <li>
                                    <a href="#">TV Shows</a>
                                </li>
                                <li>
                                    <a href="#">My List</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;