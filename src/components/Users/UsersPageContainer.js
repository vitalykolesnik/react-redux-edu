import React from 'react';
import { connect } from 'react-redux';
import {
    subscribe,
    unsubscribe,
    setCurrentPage,
    requestUsers,
} from './../../redux/usersReduser';
import {
    getUsers,
    getPageSize,
    getCurrentPage,
    getIsLoading,
} from './../../redux/usersSelectors';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <Users {...this.props} setCurrentPage={this.setCurrentPage} />;
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
    };
};

const UsersPageContainer = connect(mapStateToProps, {
    subscribe,
    unsubscribe,
    setCurrentPage,
    requestUsers,
})(UsersContainer);

export default UsersPageContainer;
