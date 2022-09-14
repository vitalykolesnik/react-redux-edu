import { getCurrentPage, getFriends, getPageSize } from '../../redux/usersSelectors';
import { AppStateType } from '../../redux/reduxStore';
import React from 'react';
import { connect } from 'react-redux';
import { getUserId } from '../../redux/authSelectors';
import {
    requestUsers,
    requestUsersPage,
} from '../../redux/usersReduser';
import {
    getUsers,
    getIsLoading,
} from '../../redux/usersSelectors';
import { ProfileType } from '../types/types';
import Users  from './Users'

type MapStatePropsType = {
    userId: number | null
    users: Array<ProfileType>,
    friends: Array<ProfileType>,
    isLoading: boolean,
    currentPage: number
    pageSize: number
};

type MapDispatchPropsType = {
    requestUsers: (currentPage: number, pageSize: number) => void
    requestUsersPage: (currentPage: number, pageSize: number) => void
};

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType
type StateType = {}

class UsersContainer extends React.PureComponent<PropsType, StateType>{
    componentDidMount() {
        let { currentPage, pageSize, requestUsers } = this.props;
        requestUsers(currentPage, pageSize);
    }

    componentDidUpdate(prevProps: PropsType) {
        if(prevProps.currentPage !== this.props.currentPage || 
            prevProps.pageSize !== this.props.pageSize) {
            let { currentPage, pageSize, requestUsers } = this.props;
            requestUsers(currentPage, pageSize);
        }
    }

    render() {
        return <Users {...this.props} />
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        userId: getUserId(state),
        users: getUsers(state),
        friends: getFriends(state),
        isLoading: getIsLoading(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state)
    };
};

const UsersPageContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps , {
    requestUsers,
    requestUsersPage,
})(UsersContainer);

export default UsersPageContainer;
