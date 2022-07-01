const SEND_MESSAGE = 'SEND-MESSAGE';
const TYPE_MESSAGE = 'TYPE-MESSAGE';
const SELECT_DIALOG = 'SELECT-DIALOG';

const dialogsReduser = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        }
        case TYPE_MESSAGE: {
            state.newMessageText = action.textMessage;
            return state;
        }
        case SELECT_DIALOG: {
            state.newMessageText = action.name + ': ';
            return state;
        }
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const typeMessageActionCreator = (text) => ({
    type: TYPE_MESSAGE,
    textMessage: text,
});

export const selectDialogActionCreator = (name) => ({
    type: SELECT_DIALOG,
    name: name,
});

export default dialogsReduser;
