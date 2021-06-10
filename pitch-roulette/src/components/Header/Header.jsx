import React from 'react';
import './Header.css';
import logo from '../../img/logo.png';


const Header = () => {


    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="nav">
                        <ul className="nav__list">
                            <li className="nav__item ">
                                <a href="#!" className="nav__link nav__link--active">Business</a>
                            </li>
                            <li className="nav__item">
                                <a href="#!" className="nav__link">Community</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;