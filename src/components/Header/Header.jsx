import React from 'react';
import s from './Header.module.css';
import kittenHeader from './../../assets/image/kitten-header.png';
import { NavLink } from 'react-router-dom';

const Header = ({ userName, isAuth }) => {
    return (
        <header className={s.header}>
            <div className={s.avatar}>
                <img src={kittenHeader} alt="Ooops" />
            </div>
            <div className={s.loginBlock}>
                <h4>Hello, {userName}!</h4>
                {isAuth ? (
                    <div>
                        <div>
                            <NavLink to="/logout">Logout</NavLink>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div>
                            <NavLink to="/login">Login or signup</NavLink>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
export default Header;
