import React from 'react';
import s from './Login.module.css';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = ({ title, execute }) => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema: Yup.object({
            login: Yup.string()
                .max(30, 'Must be 30 chars or less')
                .required('Required'),
            password: Yup.string()
                .max(30, 'Must be 30 chars or less')
                .required('Required'),
        }),
        onSubmit: () => {
            dispatch(execute(formik.values.login, formik.values.password));
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
                <button type="submit">{title}</button>
            </div>
        </form>
    );
};

export default LoginForm;
