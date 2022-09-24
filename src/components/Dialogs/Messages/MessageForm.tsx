import React from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { requestAddMessage } from 'redux/dialogsReduser';
import * as Yup from 'yup';

import { Dispatch } from 'redux';
import TextField from 'components/other/Forms/TextField/TextField';
import { Button } from '@mui/material';

const MessageForm = () => {
    const dispatch: Dispatch<any> = useDispatch()

    const validator = Yup.object({
        text: Yup.string()
            .max(100, 'Must be 100 chars or less')
    });

    const onSubmit = async (values: any, {resetForm}: any) => {
        dispatch(requestAddMessage(values.text));
        resetForm({})
	}
    
    return(
        <>
            <Formik
                initialValues={{ text: '' }}
                validationSchema={validator}
                onSubmit={onSubmit}
            >
                {() => (
                    <Form>
                        <TextField name="text" placeholder="Enter your message..." />
                        <Button 
                            variant='outlined' 
                            type='submit'
                            >
                            Send message
                        </Button>
                    </Form>    
                )}
            </Formik>
        </>
    )
};

export default MessageForm;
