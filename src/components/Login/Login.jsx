import React from 'react';
import { Input } from 'components/other/FormsControls/FormsControl';
import { Field, reduxForm } from 'redux-form';
import { required } from 'utils/validators';
import s from './Login.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="login"
                    placeholder="Enter login"
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div className={s.validation}>{props.error}</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

const Login = ({ login }) => {
    const onSubmit = (formData) => {
        login(formData);
    };

    return (
        <div className={s.container}>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

export default Login;
