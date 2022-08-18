import React from 'react';
import s from './Header.module.css';
import kittenHeader from './../../assets/image/kitten-header.png';
import { NavLink } from 'react-router-dom';

const Header = ({ userName, isAuth, logout }) => {
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
                            <button onClick={logout}>Logout</button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div>
                            <NavLink to="/login">Login</NavLink><>{" "}</>
                            <NavLink to="/signup">Signup</NavLink>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
export default Header;
