import { usersAPI } from './../api/api';
import { AppUserType, MessageType } from '../components/types/types';
import { AppStateType, InferActionsTypes } from './reduxStore';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

type InitialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

const initialState = {
    dialogs: [] as Array<AppUserType>,
    messages: [] as Array<MessageType>,
};

const actions = {
    sendMessage: (text: string) => ({
        type: 'DIALOGS/ADD_MESSAGE',
        text
    }) as const,
    
    setDialogs: (dialogs: Array<AppUserType>) => ({
        type: 'DIALOGS/SET_DIALOGS',
        dialogs,
    }) as const,
}

const dialogsReduser = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'DIALOGS/ADD_MESSAGE': {
            const newMessage: MessageType = {
                id: state.messages.length + 1,
                text: action.text
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        }
        case 'DIALOGS/SET_DIALOGS': {
            return { ...state, dialogs: action.dialogs };
        }
        default:
            return state;
    }
};

export const requestDialogs = (): ThunkType => {
    return async (dispatch: Dispatch) => {
        let { friends: dialogs  } = await usersAPI.getFriends();
        dispatch(actions.setDialogs(dialogs));
    };
};

export const requestAddMessage = (text: string): ThunkType => {
    return async (dispatch: Dispatch) => {
        dispatch(actions.sendMessage(text));
    };
};


export default dialogsReduser;
