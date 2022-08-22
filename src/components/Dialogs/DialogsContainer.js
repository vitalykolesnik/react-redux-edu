import React from 'react';
import s from './Dialogs.module.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getMessages } from 'redux/dialogsSelectors';
import { getFriends } from 'redux/usersSelectors';
import { requestDialogs, sendMessage } from '../../redux/dialogsReduser';
import Dialogs from './Dialogs';
import { withAuthRedirect } from 'components/hoc/withAuthRedirect';
import { requestFriends } from 'redux/usersReduser';
import Messages from './Messages/Messages';

class DialogsContainer extends React.Component {
    componentDidMount() {
        this.props.requestDialogs();
        this.props.requestFriends();
    }

    render() {
        return (
            <div className={s.dialogsContainer}>
                <h3>Messages</h3>
                <Dialogs friends={this.props.friends} />
                <Messages messages={this.props.messages} />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        friends: getFriends(state),
        messages: getMessages(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        sendMessage,
        requestDialogs,
        requestFriends,
    }),
    withAuthRedirect
)(DialogsContainer);
