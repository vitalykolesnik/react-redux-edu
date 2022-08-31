import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserId, getUserName } from '../../redux/authSelectors';
import { logout } from '../../redux/authReduser';
import { AppStateType } from 'redux/reduxStore';
import { Dispatch } from 'redux';

import s from './Header.module.css';

const  kittenHeader = require('./../../assets/image/kitten-header.png')

const Header: React.FC = () => {
    const userName = useSelector((state: AppStateType) => getUserName(state));
    const isAuth = useSelector((state: AppStateType) => getUserId(state));
    const dispatch: Dispatch<any> = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <header className={s.header}>
            <div className={s.avatar}>
                <img src={kittenHeader} alt="Ooops" />
            </div>
            <div className={s.loginBlock}>
                <div>
                    <h4>Hello, {userName}! </h4>
                </div>
                {isAuth ? (
                    <div className={s.loginItem}>
                        <NavLink to="/login" onClick={onLogout}>
                            Logout
                        </NavLink>
                    </div>
                ) : (
                    <div>
                        <div className={s.loginItem}>
                            <NavLink to="/login">Login</NavLink>
                            <> </>
                            <NavLink to="/signup">Signup</NavLink>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
export default Header;
