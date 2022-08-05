import React from 'react';
import { connect } from 'react-redux';
import { getUserId } from 'redux/authSelectors';
import {
    setCurrentPage,
    requestUsers,
    requestSubscribe,
    requestUnsubscribe,
} from './../../redux/usersReduser';
import {
    getUsers,
    getFriends,
    getPageSize,
    getCurrentPage,
    getIsLoading,
    getIsSubscribing,
} from './../../redux/usersSelectors';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        let { currentPage, pageSize, requestUsers } = this.props;
        requestUsers(currentPage, pageSize);
    }

    setCurrentPage = (pageNumber) => {
        let { pageSize, requestUsers } = this.props;
        requestUsers(pageNumber, pageSize);
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
        isLoading: getIsLoading(state),
        isSubscribing: getIsSubscribing(state),
    };
};

const UsersPageContainer = connect(mapStateToProps, {
    requestSubscribe,
    requestUnsubscribe,
    setCurrentPage,
    requestUsers,
})(UsersContainer);

export default UsersPageContainer;
