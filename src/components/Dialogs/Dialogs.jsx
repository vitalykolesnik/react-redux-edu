import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages';

const Dialogs = ({ friends, messages, sendMessage }) => {
    const dialogsElements = friends.map((d) => (
        <DialogItem {...d} key={d.id} />
    ));

    return (
        <div className={s.dialogs}>
            <h3>Messages</h3>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <Messages messages={messages} sendMessage={sendMessage} />
        </div>
    );
};

export default Dialogs;
