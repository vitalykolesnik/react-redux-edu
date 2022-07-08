import React from 'react';
import s from './Header.module.css';
import kittenHeader from 'assets/image/kitten-header.png';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.avatar}>
                <img src={kittenHeader} alt="Ooops" />
            </div>
        </header>
    );
};
export default Header;
