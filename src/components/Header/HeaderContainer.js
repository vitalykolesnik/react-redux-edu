// import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from 'redux/authReduser';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {}

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
