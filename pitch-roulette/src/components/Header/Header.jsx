import React from 'react';
import './Header.css';
import logo from '../../img/logo.png';
import { NavLink } from 'react-router-dom';



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
                                <NavLink to="/business" activeClassName="nav__link--active" className="nav__link">Business</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink to="/community" activeClassName="nav__link--active" className="nav__link">Community</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;