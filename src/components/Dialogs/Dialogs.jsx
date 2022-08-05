import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages';

const Dialogs = ({
    friends,
    messages,
    newMessageText,
    sendMessage,
    typeMessage,
}) => {
    const dialogsElements = friends.map((d) => (
        <DialogItem {...d} key={d.id} />
    ));

    return (
        <div className={s.dialogs}>
            <h3>Messages</h3>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <Messages
                messages={messages}
                newMessageText={newMessageText}
                sendMessage={sendMessage}
                typeMessage={typeMessage}
            />
        </div>
    );
};

export default Dialogs;
