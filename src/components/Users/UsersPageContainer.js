import React from 'react';
import { connect } from 'react-redux';
import {
    setUsers,
    subscribe,
    unsubscribe,
    setCurrentPage,
    setTotalUsersCount,
    togglePreloader,
} from 'redux/usersReduser';
import Users from './Users';
import { usersAPI } from 'api/api';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.togglePreloader(true);
        usersAPI
            .getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.togglePreloader(false);
                this.props.setUsers(data.users);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    setCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.togglePreloader(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
            this.props.togglePreloader(false);
            this.props.setUsers(data.users);
        });
    };

    render() {
        return <Users {...this.props} setCurrentPage={this.setCurrentPage} />;
    }
}

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
    };
};

const UsersPageContainer = connect(mapStateToProps, {
    subscribe,
    unsubscribe,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    togglePreloader,
})(UsersContainer);

export default UsersPageContainer;
