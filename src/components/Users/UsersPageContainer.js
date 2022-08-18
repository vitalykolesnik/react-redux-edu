import React from 'react';
import { connect } from 'react-redux';
import { getUserId } from 'redux/authSelectors';
import {
    requestUsers,
    requestSubscribe,
    requestUnsubscribe,
    requestUsersPage,
} from './../../redux/usersReduser';
import {
    getUsers,
    getFriends,
    getPageSize,
    getCurrentPage,
    getIsLoading,
    getIsSubscribing,
    getTotalUsersCount,
} from './../../redux/usersSelectors';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        let { currentPage, pageSize, requestUsers } = this.props;
        requestUsers(currentPage, pageSize);
    }

    setCurrentPage = (pageNumber) => {
        let { pageSize, requestUsersPage } = this.props;
        requestUsersPage(pageNumber, pageSize);
    };

    render() {
        return <Users {...this.props} setCurrentPage={this.setCurrentPage} />;
    }
}

let mapStateToProps = (state) => {
    return {
        userId: getUserId(state),
        users: getUsers(state),
        friends: getFriends(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isLoading: getIsLoading(state),
        isSubscribing: getIsSubscribing(state),
    };
};

const UsersPageContainer = connect(mapStateToProps, {
    requestSubscribe,
    requestUnsubscribe,
    requestUsers,
    requestUsersPage,
})(UsersContainer);

export default UsersPageContainer;
