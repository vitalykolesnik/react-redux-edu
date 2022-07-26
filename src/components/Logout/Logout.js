import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { logout } from 'redux/authReduser';
import { compose } from 'redux';
import { withAuthRedirect } from 'components/hoc/withAuthRedirect';

const Logout = (props) => {
    useEffect(() => {
        props.logout();
    });

    return <></>;
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export default compose(
    connect(mapStateToProps, { logout }),
    withAuthRedirect
)(Logout);
