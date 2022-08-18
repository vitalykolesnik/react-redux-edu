import React from 'react';
import s from './Dialogs.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { sendMessage } from 'redux/dialogsReduser';
import MessageItem from './MessageItem/MessageItem';

const MessageForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            newMessageText: '',
        },
        validationSchema: Yup.object({
            newMessageText: Yup.string()
                .max(15, 'Must be 15 chars or less')
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

const Messages = ({ messages }) => {
    const messagesElements = messages.map((m) => (
        <MessageItem {...m} key={m.id} />
    ));

    return (
        <div>
            <MessageForm />
            <div className={s.messages}>{messagesElements}</div>
        </div>
    );
};

export default Messages;
