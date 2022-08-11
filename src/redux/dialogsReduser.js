import { usersAPI } from 'api/api';

const SEND_MESSAGE = 'DIALOGS/SEND_MESSAGE';
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
};

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const text = action.newMessage.messageText;
            const newMessage = {
                id: state.messages.length + 1,
                message: text,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        }
        case SET_DIALOGS: {
            return { ...state, dialogs: action.friends };
        }
        default:
            return state;
    }
};

export const sendMessage = (newMessage) => ({
    type: SEND_MESSAGE,
    newMessage,
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
