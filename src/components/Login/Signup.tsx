import React from 'react';
import s from './Login.module.css';
import { signup } from '../../redux/authReduser';
import useRedirectComponent from '../hooks/useRedirectComponent';
import { LoginForm } from './LoginForm';

const Signup: React.FC = () => {
    const redirect = useRedirectComponent();

    return (
        <div className={s.container}>
            {redirect}
            <h3>Signup</h3>
            <LoginForm title="Signup" execute={signup} />
        </div>
    );
};

export default Signup;
