import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map((d) => (
        <DialogItem key={d.id} name={d.name} image={d.image} id={d.id} />
    ));

    const messagesElements = props.dialogsPage.messages.map((m) => (
        <Message key={m.id} message={m.message} id={m.id} />
    ));

    const newMessageText = props.dialogsPage.newMessageText;

    const onSendMessage = () => {
        props.sendMessage();
    };

    const onTypeMessage = (e) => {
        let text = e.target.value;
        props.typeMessage(text);
    };

    return (
        <div className={s.dialogs}>
            <h3>Messages</h3>
            <div className={s.dialogsItems}>{dialogsElements}</div>
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

export default Dialogs;
