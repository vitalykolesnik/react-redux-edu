import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getMessages } from '../../redux/dialogsSelectors';
import { getFriends } from '../../redux/usersSelectors';
import { requestDialogs } from '../../redux/dialogsReduser';
import { requestFriends } from '../../redux/usersReduser';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';
import Messages from './Messages/Messages';
import {  MessageType, ProfileType } from 'components/types/types';
import { AppStateType } from 'redux/reduxStore';
import { Container, Typography } from '@mui/material';

type MapStatePropsType = {
    friends: Array<ProfileType>,
    messages: Array<MessageType>,
};

type MapDispatchPropsType = {
    requestDialogs: () => void
    requestFriends: () => void
};

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType
type StateType = {}

class DialogsContainer extends React.Component<PropsType, StateType> {
    componentDidMount() {
        this.props.requestDialogs();
        this.props.requestFriends();
    }

    render() {
        return (
            <Container sx={{mt:'5rem'}}>
                <Typography variant="h4">Messages</Typography>
                <Dialogs friends={this.props.friends} />
                <Messages messages={this.props.messages} />
            </Container>
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType  => {
    return {
        friends: getFriends(state),
        messages: getMessages(state),
    };
};

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
        mapStateToProps, {
        requestDialogs,
        requestFriends,
    }),
    withAuthRedirect
)(DialogsContainer);
