import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getNewMessageText, getMessages } from 'redux/dialogsSelectors';
import { getFriends } from 'redux/usersSelectors';
import {
    requestDialogs,
    sendMessage,
    typeMessage,
} from '../../redux/dialogsReduser';
import Dialogs from './Dialogs';
import { withAuthRedirect } from 'components/hoc/withAuthRedirect';
import { requestFriends } from 'redux/usersReduser';

class DialogsContainer extends React.Component {
    componentDidMount() {
        this.props.requestDialogs();
        this.props.requestFriends();
    }

    render() {
        return <Dialogs {...this.props} />;
    }
}

let mapStateToProps = (state) => {
    return {
        friends: getFriends(state),
        messages: getMessages(state),
        newMessageText: getNewMessageText(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        sendMessage,
        typeMessage,
        requestDialogs,
        requestFriends,
    }),
    withAuthRedirect
)(DialogsContainer);
