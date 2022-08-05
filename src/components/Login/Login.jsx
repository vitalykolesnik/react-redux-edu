import React from 'react';
import s from './Login.module.css';

const Login = ({ login, signup, typeLogin, typePassword, ...props }) => {
    const onLogin = (e) => {
        e.preventDefault();
        login();
    };

    const onSignup = (e) => {
        e.preventDefault();
        signup();
    };

    const onTypeLogin = (e) => {
        typeLogin(e.target.value);
    };

    const onTypePassword = (e) => {
        typePassword(e.target.value);
    };

    return (
        <div className={s.container}>
            <h3>Login</h3>
            <form>
                <div>
                    <input
                        value={props.loginInput}
                        placeholder="Enter login"
                        onChange={onTypeLogin}
                    />
                    <div className={s.validation}>
                        {props.validateLoginMessage}
                    </div>
                </div>
                <div>
                    <input
                        type="password"
                        value={props.passwordInput}
                        placeholder="Enter password"
                        onChange={onTypePassword}
                    />
                    <div className={s.validation}>
                        {props.validatePasswordMessage}
                    </div>
                </div>
                <div>
                    <div>
                        <button type="submit" onClick={onLogin}>
                            Login
                        </button>
                    </div>
                    <div>
                        <button type="submit" onClick={onSignup}>
                            Signup
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
