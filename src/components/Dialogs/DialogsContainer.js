import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import {
    sendMessage,
    setDialogs,
    typeMessage,
} from '../../redux/dialogsReduser';
import { usersAPI } from 'api/api';

class DialogsContainer extends React.Component {
    componentDidMount() {
        usersAPI.getUsers(1, 10).then((data) => {
            this.props.setDialogs(data.users);
        });
    }

    render() {
        return <Dialogs {...this.props} />;
    }
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
    };
};

export default connect(mapStateToProps, {
    sendMessage,
    typeMessage,
    setDialogs,
})(DialogsContainer);
