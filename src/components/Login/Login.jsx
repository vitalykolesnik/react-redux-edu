import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import s from './Login.module.css';
import { login } from '../../redux/authReduser';
import useRedirectComponent from 'components/hooks/useRedirectComponent';

const LoginForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema: Yup.object({
            login: Yup.string()
                .max(15, 'Must be 15 chars or less')
                .required('Required'),
            password: Yup.string()
                .max(15, 'Must be 15 chars or less')
                .required('Required'),
        }),
        onSubmit: () => {
            dispatch(login(formik.values.login, formik.values.password));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    id="login"
                    name="login"
                    placeholder="Enter login"
                    value={formik.values.login}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            <div className={s.validation}>{formik.errors.login}</div>
            <div>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            <div className={s.validation}>{formik.errors.password}</div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
};

const Login = () => {
    const redirect = useRedirectComponent();

    return (
        <div className={s.container}>
            {redirect}
            <h3>Login</h3>
            <LoginForm />
        </div>
    );
};

export default Login;
