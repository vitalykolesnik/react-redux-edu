import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import {
    getDialogs,
    sendMessage,
    typeMessage,
} from '../../redux/dialogsReduser';
import { withAuthRedirect } from 'components/hoc/withAuthRedirect';
import { compose } from 'redux';

class DialogsContainer extends React.Component {
    componentDidMount() {
        this.props.getDialogs();
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

export default compose(
    connect(mapStateToProps, {
        sendMessage,
        typeMessage,
        getDialogs,
    }),
    withAuthRedirect
)(DialogsContainer);
