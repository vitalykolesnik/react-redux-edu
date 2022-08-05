import { usersAPI } from 'api/api';

const SEND_MESSAGE = 'DIALOGS/SEND_MESSAGE';
const TYPE_MESSAGE = 'DIALOGS/TYPE_MESSAGE';
const SET_DIALOGS = 'DIALOGS/SET_DIALOGS';

const initialState = {
    friends: [],
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
    return async (dispatch) => {
        let { friends } = await usersAPI.getFriends();
        dispatch(setDialogs(friends));
    };
};

export default dialogsReduser;
