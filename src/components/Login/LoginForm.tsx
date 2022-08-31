import React, { Dispatch } from 'react';
import s from './Login.module.css';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';

type LoginFormType = {
    title: string
    execute: (login: string, password: string) => void 
}
export const LoginForm: React.FC<LoginFormType> = ({ title, execute }) => {
    const dispatch: Dispatch<any> = useDispatch();

    const validator = Yup.object({
        login: Yup.string()
            .max(30, 'Must be 30 chars or less')
            .required('Required'),
        password: Yup.string()
            .max(30, 'Must be 30 chars or less')
            .required('Required'),
    })

    const  onSubmit = (values:{ login:string, password:string}) => {
        dispatch(execute(values.login, values.password));
    }

    return (
    <div>
        <Formik
				initialValues={{ login: '', password: '', }}
				validationSchema={validator}
				onSubmit={onSubmit}
		>
        {({handleSubmit}) => (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="login"
                    type="text"
                    placeholder="Enter login"
                />
            </div>
            <ErrorMessage name="login" component="div" className={s.validation} />
            {/* <div className={s.validation}>{errors.login}</div> */}
            <div>
                <Field
                    name="password"
                    type="password"
                    placeholder="Enter password"
                />
            </div>
            <ErrorMessage name="password" component="div" className={s.validation} />
            {/* <div className={s.validation}>{formik.errors.password}</div> */}
            <div>
                <button type="submit">{title}</button>
            </div>
        </form>  
        )}
        </Formik>
    </div>)
}
        // <div>
        // <Formik
		// 		initialValues={{ login: '', password: '', }}
		// 		validationSchema={validator}
		// 		onSubmit={onSubmit}
		// 	>
		// 	{({errors,handleSubmit}) => (
        // <form onSubmit={handleSubmit}>
        //     <div>
        //         <Field
        //             name="login"
        //             type="text"
        //             placeholder="Enter login"
        //         />
        //     </div>
        //     <div className={s.validation}>{formik.errors.login}</div>
        //     <div>
        //         <Field
        //             name="password"
        //             type="password"
        //             placeholder="Enter password"
        //         />
        //     </div>
        //     <div className={s.validation}>{formik.errors.password}</div>
        //     <div>
        //         <button type="submit">{title}</button>
        //     </div>
        // </form>
        //
