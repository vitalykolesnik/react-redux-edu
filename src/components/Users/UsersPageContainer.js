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
    getIsLoading,
    getIsSubscribing,
} from './../../redux/usersSelectors';
import Users from './Users';

class UsersContainer extends React.PureComponent {
    componentDidMount() {
        let { currentPage, pageSize, requestUsers } = this.props;
        requestUsers(currentPage, pageSize);
    }

    render() {
        return <Users {...this.props} />;
    }
}

let mapStateToProps = (state) => {
    return {
        userId: getUserId(state),
        users: getUsers(state),
        friends: getFriends(state),
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
