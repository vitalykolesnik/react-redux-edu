import React from 'react';
import { connect } from 'react-redux';
import {
    subscribe,
    unsubscribe,
    setCurrentPage,
    getUsers,
} from 'redux/usersReduser';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <Users {...this.props} setCurrentPage={this.setCurrentPage} />;
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
    };
};

const UsersPageContainer = connect(mapStateToProps, {
    subscribe,
    unsubscribe,
    setCurrentPage,
    getUsers,
})(UsersContainer);

export default UsersPageContainer;
