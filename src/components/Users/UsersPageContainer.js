import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
    setUsersAC,
    subscribeAC,
    unsubscribeAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    togglePreloaderAC,
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
        return (
            <Users
                usersPage={this.props.usersPage}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                setCurrentPage={this.setCurrentPage}
                setUsers={this.props.setUsers}
                subscribe={this.props.subscribe}
                unsubscribe={this.props.unsubscribe}
                isLoading={this.props.isLoading}
            />
        );
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

let mapDispatchToProps = (dispatch) => {
    return {
        subscribe: (id) => {
            dispatch(subscribeAC(id));
        },
        unsubscribe: (id) => {
            dispatch(unsubscribeAC(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        togglePreloader: (isLoading) => {
            dispatch(togglePreloaderAC(isLoading));
        },
    };
};

const UsersPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersContainer);

export default UsersPageContainer;
