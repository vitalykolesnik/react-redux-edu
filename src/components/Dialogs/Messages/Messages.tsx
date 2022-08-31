import React from 'react';
import s from './Messages.module.css';
import MessageForm from './MessageForm';
import { MessageType } from 'components/types/types';

type PropsType ={
    messages: Array<MessageType>
}

const Messages: React.FC<PropsType>= ({ messages }) => {
    const messagesElements = messages.map((m) => (
        <div className={s.message} key={m.id}>
            {m.text}
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
