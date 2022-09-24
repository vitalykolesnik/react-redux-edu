import React, { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import {  Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Grid } from '@mui/material';
import TextField from 'components/other/Forms/TextField/TextField';

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
        {() => (
            <Form>
                <Grid container spacing={3} columns={1} marginY={2} >
                    <Grid item xs={12} >
                        <TextField
                            name="login"
                            type="text"
                            placeholder="Enter login"
                            />
                    </Grid>
              
                    <Grid item xs={12}>
                        <TextField
                            name="password"
                            type="password"
                            placeholder="Enter password"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button type="submit">{title}</Button>
                    </Grid>

                </Grid>
               
            </Form>  
        )}
        </Formik>
    </div>)
}
