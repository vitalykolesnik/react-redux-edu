import Dialogs from './Dialogs';
import {
    sendMessageActionCreator,
    typeMessageActionCreator,
} from '../../redux/dialogsReduser';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        typeMessage: (text) => {
            dispatch(typeMessageActionCreator(text));
        },
    };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
