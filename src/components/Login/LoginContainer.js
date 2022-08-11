import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { login, signup } from 'redux/authReduser';
import Login from './Login';
import { withAutoRedirectToMain } from 'components/hoc/withAutoRedirect';

const LoginContainer = (props) => {
    const executeLogin = (params) => {
        const { login, password } = params;
        props.login(login, password);
    };

    return <Login {...props} login={executeLogin} />;
};

export default compose(
    connect(null, {
        login,
        signup,
    }),
    withAutoRedirectToMain
)(LoginContainer);
