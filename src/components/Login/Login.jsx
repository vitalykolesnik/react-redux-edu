import React from 'react';
import s from './Login.module.css';
import { login } from '../../redux/authReduser';
import useRedirectComponent from 'components/hooks/useRedirectComponent';
import LoginForm from './LoginForm';

const Login = () => {
    const redirect = useRedirectComponent();

    return (
        <div className={s.container}>
            {redirect}
            <h3>Login</h3>
            <LoginForm title="Login" execute={login} />
        </div>
    );
};

export default Login;
