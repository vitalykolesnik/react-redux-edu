import React from 'react';
import s from './Messages.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { sendMessage } from 'redux/dialogsReduser';

const MessageForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            newMessageText: '',
        },
        validationSchema: Yup.object({
            newMessageText: Yup.string()
                .max(100, 'Must be 100 chars or less')
                .required('Required'),
        }),
        onSubmit: () => {
            const message = { text: formik.values.newMessageText };
            dispatch(sendMessage(message));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={s.inputMessage}>
                <textarea
                    className={formik.errors.newMessageText ? s.errorArea : ''}
                    id="newMessageText"
                    name="newMessageText"
                    placeholder="Enter your message..."
                    value={formik.values.newMessageText}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                <button type="submit">Send message</button>
                <div className={formik.errors ? s.errorMessage : ''}>
                    {formik.errors ? formik.errors.newMessageText : null}
                </div>
            </div>
        </form>
    );
};

export default MessageForm;
