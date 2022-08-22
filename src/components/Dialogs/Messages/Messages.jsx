import React from 'react';
import s from './Messages.module.css';
import MessageForm from './MessageForm';

const Messages = ({ messages }) => {
    const messagesElements = messages.map((m) => (
        <div className={s.message} key={m.id}>
            {m.message}
        </div>
    ));

    return (
        <div>
            <MessageForm />
            <div className={s.messages}>{messagesElements}</div>
        </div>
    );
};

export default Messages;
