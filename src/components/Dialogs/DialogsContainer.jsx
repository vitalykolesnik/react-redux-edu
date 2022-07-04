import React from 'react';
import Dialogs from './Dialogs';
import {
    sendMessageActionCreator,
    typeMessageActionCreator,
} from '../../redux/dialogsReduser';

const DialogsContainer = (props) => {
    const state = props.store.getState().dialogsPage;

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    };

    const typeMessage = (text) => {
        const action = typeMessageActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <Dialogs
            dialogsPage={state}
            sendMessage={sendMessage}
            typeMessage={typeMessage}
        />
    );
};

export default DialogsContainer;
