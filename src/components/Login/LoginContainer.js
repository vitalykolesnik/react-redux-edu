import { withAutoRedirectToMain } from 'components/hoc/withAutoRedirect';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    getMe,
    login,
    signup,
    typeLogin,
    typePassword,
} from 'redux/authReduser';
import Login from './Login';

class LoginContainer extends React.Component {
    componentDidMount() {
        this.props.getMe();
    }

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
        getMe,
        login,
        signup,
        typeLogin,
        typePassword,
    }),
    withAutoRedirectToMain
)(LoginContainer);
