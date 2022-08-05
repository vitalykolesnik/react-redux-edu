import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { logout } from 'redux/authReduser';
import { compose } from 'redux';
import { withAuthRedirect } from 'components/hoc/withAuthRedirect';
import { getIsAuth } from 'redux/authSelectors';

const Logout = ({ logout }) => {
    useEffect(() => {
        logout();
    });

    return <></>;
};

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
    };
};

export default compose(
    connect(mapStateToProps, { logout }),
    withAuthRedirect
)(Logout);
