import React from 'react';
import s from './Header.module.css';
import kittenHeader from './../../assets/image/kitten-header.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.avatar}>
                <img src={kittenHeader} alt="Ooops" />
            </div>
            <div className={s.loginBlock}>
                {props.login}
                <NavLink to="/logout">Logout</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">SignUp</NavLink>
            </div>
        </header>
    );
};
export default Header;
