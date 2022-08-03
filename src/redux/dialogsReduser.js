import { usersAPI } from 'api/api';

const SEND_MESSAGE = 'SEND-MESSAGE';
const TYPE_MESSAGE = 'TYPE-MESSAGE';
const SET_DIALOGS = 'SET_DIALOGS';

const initialState = {
    dialogs: [],
    messages: [
        {
            id: 1,
            message: 'Hi',
        },
        {
            id: 2,
            message: 'Hello',
        },
        {
            id: 3,
            message: 'Cool!!!',
        },
    ],
    newMessageText: '',
};

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (state.newMessageText) {
                // Check empty
                const newMessage = {
                    id: state.messages.length + 1,
                    message: state.newMessageText,
                };
                return {
                    ...state,
                    messages: [...state.messages, newMessage],
                    newMessageText: '',
                };
            }
            return state;
        }
        case TYPE_MESSAGE: {
            return { ...state, newMessageText: action.textMessage };
        }
        case SET_DIALOGS: {
            return { ...state, dialogs: action.friends };
        }
        default:
            return state;
    }
};

export const sendMessage = () => ({ type: SEND_MESSAGE });

export const typeMessage = (text) => ({
    type: TYPE_MESSAGE,
    textMessage: text,
});

export const setDialogs = (friends) => ({
    type: SET_DIALOGS,
    friends,
});

export const requestDialogs = () => {
    return (dispatch) => {
        usersAPI.getUsers(1, 10).then((data) => {
            const { users } = data;
            dispatch(setDialogs(users));
        });
    };
};

export default dialogsReduser;
