import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { login, signup, typeLogin, typePassword } from 'redux/authReduser';
import Login from './Login';
import { withAutoRedirectToMain } from 'components/hoc/withAutoRedirect';
import {
    getLoginInput,
    getPasswordInput,
    getValidateLoginMessage,
    getValidatePasswordMessage,
} from 'redux/authSelectors';

class LoginContainer extends React.Component {
    executeLogin = () => {
        this.props.login(this.props.loginInput, this.props.passwordInput);
    };

    executeSignup = () => {
        this.props.signup(this.props.loginInput, this.props.passwordInput);
    };

    render() {
        return (
            <Login
                {...this.props}
                login={this.executeLogin}
                signup={this.executeSignup}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        validateLoginMessage: getValidateLoginMessage(state),
        validatePasswordMessage: getValidatePasswordMessage(state),
        loginInput: getLoginInput(state),
        passwordInput: getPasswordInput(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        login,
        signup,
        typeLogin,
        typePassword,
    }),
    withAutoRedirectToMain
)(LoginContainer);
