import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import {
    requestDialogs,
    sendMessage,
    typeMessage,
} from '../../redux/dialogsReduser';
import { withAuthRedirect } from 'components/hoc/withAuthRedirect';
import { compose } from 'redux';
import { getDialogsPage, getNewMessageText } from 'redux/dialogsSelectors';

class DialogsContainer extends React.Component {
    componentDidMount() {
        this.props.requestDialogs();
    }

    render() {
        return <Dialogs {...this.props} />;
    }
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: getDialogsPage(state),
        newMessageText: getNewMessageText(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        sendMessage,
        typeMessage,
        requestDialogs,
    }),
    withAuthRedirect
)(DialogsContainer);
