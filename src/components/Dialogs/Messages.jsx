import { TextArea } from 'components/other/FormsControls/FormsControl';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from 'utils/validators';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';

const maxLength30 = maxLengthCreator(30);

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.inputMessage}>
                <div>
                    <Field
                        name="messageText"
                        placeholder="Enter your message..."
                        component={TextArea}
                        validate={[required, maxLength30]}
                    />
                </div>
                <div>
                    <button>Send message</button>
                </div>
            </div>
        </form>
    );
};

const MessageFormRedux = reduxForm({ form: 'addNewMessage' })(MessageForm);

const Messages = ({ messages, sendMessage }) => {
    const messagesElements = messages.map((m) => (
        <MessageItem {...m} key={m.id} />
    ));

    const onSendMessage = (text) => {
        sendMessage(text);
    };

    return (
        <div>
            <MessageFormRedux onSubmit={onSendMessage} />
            <div className={s.messages}>{messagesElements}</div>
        </div>
    );
};

export default Messages;
