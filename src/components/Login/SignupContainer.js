import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signup } from 'redux/authReduser';
import Signup from './Signup';
import { withAutoRedirectToMain } from 'components/hoc/withAutoRedirect';

const SignupContainer = (props) => {
    const executeSignup = (params) => {
        const { login, password } = params;
        props.signup(login, password);
    };

    return <Signup {...props} signup={executeSignup} />;
};

export default compose(
    connect(null, {
        signup,
    }),
    withAutoRedirectToMain
)(SignupContainer);
