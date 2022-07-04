import Dialogs from './Dialogs';
import {
    sendMessageActionCreator,
    typeMessageActionCreator,
} from '../../redux/dialogsReduser';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {
//     const sendMessage = () => {
//         props.store.dispatch(sendMessageActionCreator());
//     };

//     const typeMessage = (text) => {
//         const action = typeMessageActionCreator(text);
//         props.store.dispatch(action);
//     };

//     return (
//         <Dialogs
//             dialogsPage={store.getState().dialogsPage}
//             sendMessage={sendMessage}
//             typeMessage={typeMessage}
//         />
//     );
// };

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const sendMessage = () => {
//                     store.dispatch(sendMessageActionCreator());
//                 };

//                 const typeMessage = (text) => {
//                     store.dispatch(typeMessageActionCreator(text));
//                 };

//                 return (
//                     <Dialogs
//                         dialogsPage={store.getState().dialogsPage}
//                         sendMessage={sendMessage}
//                         typeMessage={typeMessage}
//                     />
//                 );
//             }}
//         </StoreContext.Consumer>
//     );
// };

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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
