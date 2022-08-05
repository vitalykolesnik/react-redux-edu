import React from 'react';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';

const Messages = ({ messages, sendMessage, typeMessage, newMessageText }) => {
    const messagesElements = messages.map((m) => (
        <MessageItem {...m} key={m.id} />
    ));

    const onSendMessage = () => {
        sendMessage();
    };

    const onTypeMessage = (e) => {
        typeMessage(e.target.value);
    };

    return (
        <div>
            <div className={s.inputMessage}>
                <div>
                    <textarea
                        onChange={onTypeMessage}
                        value={newMessageText}
                        placeholder="Enter your message..."
                    />
                </div>
                <div>
                    <button onClick={onSendMessage}>Send message</button>
                </div>
            </div>
            <div className={s.messages}>{messagesElements}</div>
        </div>
    );
};

export default Messages;
