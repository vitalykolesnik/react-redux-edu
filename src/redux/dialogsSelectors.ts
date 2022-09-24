import { MessageType } from './../components/types/types';
import { AppStateType } from "./reduxStore";

export const getMessages = (state: AppStateType): Array<MessageType> => {
    return state.dialogsPage.messages;
};
