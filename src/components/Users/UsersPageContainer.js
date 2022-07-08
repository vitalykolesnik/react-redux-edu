import React from 'react';
import axios from 'axios';
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

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.togglePreloader(true);
        axios
            .get(
                `http://localhost:5000/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((res) => {
                this.props.togglePreloader(false);
                this.props.setUsers(res.data.users);
                this.props.setTotalUsersCount(res.data.totalCount);
            });
    }

    setCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.togglePreloader(true);
        axios
            .get(
                `http://localhost:5000/users?page=${pageNumber}&count=${this.props.pageSize}`
            )
            .then((res) => {
                this.props.togglePreloader(false);
                this.props.setUsers(res.data.users);
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
