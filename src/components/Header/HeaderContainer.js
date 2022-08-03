import React from 'react';
import { connect } from 'react-redux';
import { getIsAuth, getUserLogin } from '../../redux/authSelectors';
import Header from './Header';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        userLogin: getUserLogin(state),
    };
};

export default connect(mapStateToProps, {})(HeaderContainer);
