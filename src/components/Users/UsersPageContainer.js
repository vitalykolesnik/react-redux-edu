import { connect } from 'react-redux';
import { setUsersAC, subscribeAC, unsubscribeAC } from 'redux/usersReduser';
import UsersPage from './UsersPage';

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
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
    };
};

const UsersPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersPage);

export default UsersPageContainer;
