import React from 'react';
import { Input } from 'components/other/FormsControls/FormsControl';
import { Field, reduxForm } from 'redux-form';
import { required } from 'utils/validators';
import s from './Login.module.css';

const SignupForm = (props) => {
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
                <button>Signup</button>
            </div>
        </form>
    );
};

const SignupReduxForm = reduxForm({
    form: 'signup',
})(SignupForm);

const Signup = ({ signup }) => {
    const onSubmit = (formData) => {
        signup(formData);
    };

    return (
        <div className={s.container}>
            <h3>Signup</h3>
            <SignupReduxForm onSubmit={onSubmit} />
        </div>
    );
};

export default Signup;
