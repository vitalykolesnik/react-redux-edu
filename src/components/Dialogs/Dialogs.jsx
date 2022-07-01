import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
    sendMessageActionCreator,
    typeMessageActionCreator,
} from './../../redux/dialogsReduser';

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map((d) => (
        <DialogItem
            key={d.id}
            name={d.name}
            image={d.image}
            id={d.id}
            dispatch={props.dispatch}
        />
    ));

    const messagesElements = props.dialogsPage.messages.map((m) => (
        <Message key={m.id} message={m.message} id={m.id} />
    ));

    const newMessageText = props.dialogsPage.newMessageText;

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    };

    const typeMessage = (e) => {
        let text = e.target.value;
        props.dispatch(typeMessageActionCreator(text));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.inputMessage}>
                <div>
                    <textarea
                        onChange={typeMessage}
                        value={newMessageText}
                        placeholder="Enter your message..."
                    />
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
            <div className={s.messages}>{messagesElements}</div>
        </div>
    );
};

export default Dialogs;
