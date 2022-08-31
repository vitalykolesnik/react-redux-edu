import React from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { requestAddMessage } from 'redux/dialogsReduser';
import * as Yup from 'yup';
import s from './Messages.module.css';
import { Dispatch } from 'redux';

const MessageForm = () => {
    const dispatch: Dispatch<any> = useDispatch()

    const validator = Yup.object({
        text: Yup.string()
            .max(100, 'Must be 100 chars or less')
            // .required('Required'),
    });

    const onSubmit = (values: any) => {
        dispatch(requestAddMessage(values.text));
	}
    
    return(
        <div className={s.inputMessage}>
            <Formik
                initialValues={{ text: '' }}
                validationSchema={validator}
                onSubmit={onSubmit}
            >
            {({errors, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field
                        type="text"
                        name="text"
                        placeholder="Enter your message..."
                        className={errors.text ? s.errorArea : ''}
                    />
                    <button type="submit">Send message</button>
                    <ErrorMessage className={ s.errorMessage} name="text" component="div" />
                </form>
            )}
            </Formik>
        </div>
    )
};

export default MessageForm;
