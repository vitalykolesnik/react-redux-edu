import React from 'react';
import s from './Preloader.module.css';

const preloader = require( './../../../assets/image/preloader.gif');

const Preloader: React.FC = () => {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt="Ooops" />
        </div>
    );
};

export default Preloader;
