import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { login, signup, typeLogin, typePassword } from 'redux/authReduser';
import Login from './Login';
import { withAutoRedirectToMain } from 'components/hoc/withAutoRedirect';

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
        validateLoginMessage: state.auth.validateLoginMessage,
        validatePasswordMessage: state.auth.validatePasswordMessage,
        loginInput: state.auth.loginInput,
        passwordInput: state.auth.passwordInput,
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
