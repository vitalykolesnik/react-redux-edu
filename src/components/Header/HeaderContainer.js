import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'redux/authReduser';
import { getIsAuth, getUserName } from '../../redux/authSelectors';
import Header from './Header';

const HeaderContainer = ({ isAuth, userName, logout }) => {
    return <Header isAuth={isAuth} userName={userName} logout={logout} />;
};

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        userName: getUserName(state),
    };
};

export default connect(mapStateToProps, { logout })(HeaderContainer);
