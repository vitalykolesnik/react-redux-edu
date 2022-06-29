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

    const newMessageElement = React.createRef();

    const sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>{messagesElements}</div>
            <div>
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
